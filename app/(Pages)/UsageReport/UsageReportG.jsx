import React, { useEffect } from 'react'

function UsageReportG({data}) {

const filterGroup = ()=>{
    // const g = "FSSM_M2BIOCLIMAD_fr"
    // console.log('Data is ' , g.split('_'));

    const GroupSplited =[...new Set( data.map(rec => {if (rec[4] != undefined){return rec[4].split('_') }} ))]
    console.log('GroupSplited ' , GroupSplited);

    const Groups = GroupSplited.slice(0,60).map((gr,i) =>{ return gr[0]})
    console.log('Data is ' , Groups);
}
useEffect(()=>{
    filterGroup()
},[data])

  return (
    <div>UsageReportG</div>
  )
}

export default UsageReportG