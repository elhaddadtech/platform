"use client"
import axios  from 'axios';
import React, {useState, CSSProperties, useRef } from 'react';
import { Tb123 } from 'react-icons/tb';

import { useCSVReader } from 'react-papaparse';

const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  } ,
  browseFile: {
    width: '20%',
    backgroundColor:"rgb(14 116 144)"
  } ,
  acceptedFile: {
    border: '1px solid #ccc',
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: '80%',
  } ,
  remove: {
    borderRadius: 0,
    padding: '0 20px',
    backgroundColor:"rgb(220 38 38)"
  } ,
  progressBarBackgroundColor: {
    backgroundColor: 'red',
  } ,
};

 function CSVReader() {
  const refFile = useRef(null)
   const [fileName,setFileName] = useState('')
   const[ cl,setCl ]=useState('Catalyst')
  const[ pl,setPl ]=useState('Placement')
  const[ lr,setLr ]=useState('Learner')
  const[ br,setBr ]=useState('Builder')
  const { CSVReader } = useCSVReader();
  const AddData = async (data,fileName) =>{
      // const splite = 
      // console.log('FileName',refFile.current.name);
    const table = fileName.substring(0, 9)==pl? pl : fileName.substring(0, 8)==cl ? cl :fileName.substring(0, 6)==lr ? lr:fileName.substring(0, 6)==br ? br:null //Finish Null Case
      if (table !=null){
        await axios.post(`http://localhost:3001/${table}`,data)
        console.log('Finished');

      }else{ alert('File Incorrect') }
    console.log("fileName--AddData",table,data)
    // const table = 
    // const csv = await axios.post("http://localhost:3001/clients",data)
  }
  
 
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results);
        const records = results.data.map((record)=>{ return  {...record} })
        const resultObject = { id:1,data :JSON.stringify(records) }
        AddData(resultObject, refFile.current.name)
        // setResult(resultObject)
       
     
       
        console.log('---------------------------');
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div style={styles.csvReader} className='w-3/5 mx-auto text-center '>
            <button type='button' {...getRootProps()} style={styles.browseFile} name={acceptedFile && acceptedFile.name}  ref={refFile}>
              Browse file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name }
             
      
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          
          <ProgressBar  className="progress progress-primary text-center mt-8 w-56"   />
          
      
        </>
      )}
    </CSVReader>
  );
}
export default CSVReader ;