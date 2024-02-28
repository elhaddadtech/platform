'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TestStat from '../../Components/TestStat'
import TestReportG from './TestReportG'

export default function TestReport() {
     const [allUsers,setAllusers]=useState([])
     const [langues,setLangues] = useState([])
    const getTestData =  async () =>{
    const testData = await axios.get("http://localhost:3001/Placement")
    setAllusers(JSON.parse(await testData.data[0].data))
    const dt =JSON.parse(await testData.data[0].data)
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
    <div>
      <div className="d-block">
      <TestReportG data={allUsers}/>
      </div>
      
      <TestStat  langues={langues} data={allUsers}/>
      </div>
    
  )
}
