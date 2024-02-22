import React, { useEffect, useState } from 'react'

function UsageReportG({data}) {
    const [groups,setGroups] = useState([])
const filterGroup = ()=>{
    // const g = "FSSM_M2BIOCLIMAD_fr"
    // console.log('Data is ' , g.split('_'));

    const GroupSplited =[...new Set( data.map(rec => {if (rec[4] != undefined){return rec[4].split('_') }} ))]
    console.log('GroupSplited ' , GroupSplited);

    const Groups = new Set( GroupSplited.slice(0,length-1).map((gr,i) =>{ return gr[0]}))
    console.log('Data is 1 ' , Groups);
    setGroups([...Groups])
    // console.log('Data is ' , new Set(Groups));
}
useEffect(()=>{
    filterGroup()
},[data])

  return (
    <div> 
      <select className="select w-full max-w-xs">
      <option disabled selected>Pick your Faculte</option>
      {
        groups.map((grp,i)=>{ return( <option  key={i}> {grp !=='Group(s)' && grp } </option>
           
          
        )})
       }
       </select>
        </div>
  )
}

export default UsageReportG