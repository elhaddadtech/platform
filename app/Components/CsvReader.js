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
/////comment
 function CSVReader() {
  const refFile = useRef(null)
   const [fileName,setFileName] = useState('')
   const [files,setFiles] = useState({"cl" : "Catalyst", "pl":"Placement","lr":"Learner","br":"Builder"})
  const { CSVReader } = useCSVReader();
  const AddData = async (data,fileName) =>{
      // console.log('FileName',refFile.current.name);
    const table = fileName.substring(0, 9)==files.pl? files.pl : fileName.substring(0,8)== files.cl ? files.cl :fileName.substring(0, 6)== files.lr ? files.lr:fileName.substring(0, 6)==files.br ? files.br:null //Finish Null Case
        setTable(table)  
    if (table !=null){
        await axios.post(`http://localhost:3001/${table}`,data)
        console.log('Finished');

      }else{ alert('File Incorrect') }

  }
  
 
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results);
        const data = [] ;
        results.data.slice(1,(results.data.length - 4)).forEach(element => {
          if (refFile.current.name.substring(0,8) == files.cl){
            const catObj = { "Organization": element[0] , "LastName" : element[1], "FirstName" : element[2] , "Email" : element[3] , "Group": element[4] , "License": element[9] , "Profile" : element[14]  }
                   data.push(catObj)
          }else{
            if (refFile.current.name.substring(0, 9) == files.pl){
              const plObj = { "Organization": element[0] , "LastName" : element[1], "FirstName" : element[2] , "Email" : element[3] , "Group": element[4] , "Language": element[5] , "TestName" : element[6]  , "TimeSpentTest " : element[8] , "TestedFirst" : element[9],"TestResultFirst": element[10] }
                    data.push(plObj)
            }
          }
            
        });
        const resultObject = { id:1,data :data}
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