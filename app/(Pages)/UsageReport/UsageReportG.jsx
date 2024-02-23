import React, { useEffect, useState } from 'react'
import Stat from '../../Components/Stat'

function UsageReportG({data}) {
    const [groups,setGroups] = useState([])
    const [total,setTotal] = useState(0)
    const [active,setActive] = useState(0)
    const [inactive,setInaActive] = useState(0)
const filterGroup = ()=>{
    const GroupSplited =[...new Set( data.map(rec => {if (rec[4] != undefined){return rec[4].split('_') }} ))]
    const Grps = (GroupSplited.filter(element => {return( element !== undefined )}))
    const Groups = new Set( Grps.slice(1).map((gr,i) =>{ return gr[0]}))
    setGroups([...Groups])
}


const ActivatedUsers = (data) => {
  console.log("Data Is " , data);
  const Activated1 = data?.map( (record) =>{if(record[14] !=='' && record[9] !=='' ){return record[3]}} )
  const Activated = Activated1.filter((rec)=> {return rec!== undefined })
 
  //  setActivate(Activated.length-1)

   const NotActivated1 = data?.map( (record) =>{if(record[14] =='' ){return record[3]}} )
   const NotActivated = NotActivated1.filter((rec)=> {return rec!== undefined })
   const TotalUsers = [...new Set(Activated ),...new Set(NotActivated)]
   setTotal(TotalUsers.length)
   setActive(new Set(Activated ).size)
   setInaActive(new Set(NotActivated).size)
   console.log("Activated F" ,new Set(Activated ) );
   console.log('Not Active F' , new Set(NotActivated));
   console.log('Total Users F' , TotalUsers );
  
  //  setNotActivated(NotActivated.length)
  //  const AllEmails = [...new Set(Activated),...new Set(NotActivated)]
  //  setAllEmail( AllEmails)

}
 
const findByGroup = (e) =>{
  const fd =data.filter(element => {  return( element[4] != undefined && ([...element[4].split('_')][0].trim()).includes((e.target.value).trim()))})
   console.log('Value is ' , e.target.value ) 
    ActivatedUsers(fd)
   console.log('All data is  ' ,fd) 
  }
useEffect(()=>{
    filterGroup()
},[data])

  return (
    <div className='my-3'> 
      <select className="select select-success w-full max-w-xs" defaultValue={'false'} onChange={findByGroup}>
      <option disabled selected value={"false"}>Pick your Faculte</option>
      {
        groups.map((grp,i)=>{ return( <option  key={i}  value={grp}> {grp !==null && grp } </option>  )})
       }
       </select>

<div className=' stats shadow'>
       <div className="stat place-items-center">
      <div className="stat-title">Not Activated Users </div>
      <div className="stat-value">{inactive}</div>
      <div className="stat-desc"></div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">All Users</div>
     
      <div className="stat-value text-secondary"> { total}  </div>
      <div className="stat-desc text-secondary">↗︎ (100  %)</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Activated Users</div>
      <div className="stat-value"> { active  }  </div>
      <div className="stat-desc"></div>
    </div>

    </div>

        </div>
  )
}

export default UsageReportG