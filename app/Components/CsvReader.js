"use client"

import React, {useState, CSSProperties } from 'react';

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
  const [data,setData] = useState([])
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results.data);
        setData(results.data)
        // const DATA = JSON.stringify(results.data)
        localStorage.setItem("Data",DATA)
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
            <button type='button' {...getRootProps()} style={styles.browseFile}>
              Browse file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
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