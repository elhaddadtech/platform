'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TestStat from '../../Components/TestStat'
let dt =[]
export default function TestReport() {
  
     const [langues,setLangues] = useState([])
    const getTestData =  async () =>{
     const testData = await axios.get("http://localhost:3001/Placement")
     dt =JSON.parse(testData.data[0].data)
     console.log("testdata",dt)
     const lg= dt.map((lng) => { return lng[5] }
     )
     console.log("languages",lg)
     const lgs = [...new Set(lg)]
     const languages = lgs.slice(1).filter((lg)=>{ return lg !=undefined })
     console.log("languages New",languages)
     setLangues(languages)
      
    
     

    
    }
    
   
useEffect(()=>{
  getTestData()},[])
    
  return (
    <TestStat  langues={langues} data={dt}/>
  )
}
