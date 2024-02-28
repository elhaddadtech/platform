"use client"
import React,{ useState,useEffect } from 'react'

function TestReportG({data}) {
    const [groups,setGroups] = useState([])
    const filterGroup = ()=>{
        const GroupSplited =[...new Set(data.map((rec )=> {if (rec[4] != undefined){return rec[4].split('_') }} ))]
        const Grps = (GroupSplited.filter(element => {return( element !== undefined )}))
        const Groups = new Set( Grps.slice(1).map((gr,i) =>{ return gr[0]}))
        setGroups([...Groups])
    }

    useEffect(()=>{
        filterGroup()
        console.log("DATA IS:",data)
    },[data])
  return (
    <div>
        <select className="select select-success w-full max-w-md mt-2" defaultValue={'false'} >
             <option disabled selected value={"false"}>Pick your Faculty</option>
                   {
                    groups.map((grp,i)=>{ return( <option  key={i}  value={grp}> {grp !==null && grp } </option>  )})
                     }
             </select>
     </div>
  )
}

export default TestReportG