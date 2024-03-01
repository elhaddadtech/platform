'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TestStat from '../../Components/TestStat'
import TestReportG from './TestReportG'
import Selectt from '../../Components/Selectt'
import FilterTestReport from './FilterTestReport'
import TestReportF from './TestReportF'
let dt =[]
export default function TestReport() {
     const [allUsers,setAllusers]=useState([])
     const [langues,setLangues] = useState([])
     const [Group, setGroup] = useState("");
     
    
    const groupeChoisi = (gr) => {
      return setGroup(gr);
    };
   
    const getTestData =  async () =>{
    const testData = await axios.get("http://localhost:3001/Placement")
    
     dt =testData.data[0].data
     const lg= dt.map((lng) => { return lng.Language }
     )
     console.log("data ",dt)
     const lgs = [...new Set(lg)]
     const languages = lgs.filter((lg)=>{ return lg !=undefined })
     console.log("languages New",languages)
     setLangues(languages)
      
    
     
    
    
    }
    
   
useEffect(()=>{
  
  getTestData()},[Group])
    
  return (
    <div>
      
      <FilterTestReport languages={langues} data={dt}   Group={Group}/>
      <div className="d-block mt-5">
      
      <TestReportG data={dt} setter={groupeChoisi}/>
      </div>
      
      </div>
    
  )
}
