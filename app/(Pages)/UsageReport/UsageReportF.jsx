import React, { useEffect, useState } from 'react'
import ProgressB from "../../Components/ProgressB"
// import Stat from '../../Components/Stat'

function UsageReportF({data}) {
    const [isSelected,setIsSelected] = useState(true)
    const [groups,setGroups] = useState([])
    const [total,setTotal] = useState(0)
    const [active,setActive] = useState(0)
    const [inactive,setInaActive] = useState(0)
    const [levelA,setLeveA] = useState(0)
    const [levelN,setLevelN] = useState(0)
const filterGroup = ()=>{
    const GroupSplited =[...new Set( data.map(rec => {if (rec[4] != undefined){return rec[4].split('_') }} ))]
    const Grps = (GroupSplited.filter(element => {return( element !== undefined )}))
    const Groups = new Set( Grps.slice(1).map((gr,i) =>{ return (gr[0] + '_' + gr[1]) }))
    console.log('GroupF' ,Groups);
    setGroups([...Groups])
   setIsSelected(false)

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
   setLeveA( ( (new Set(Activated ).size / TotalUsers.length) * 100).toFixed() )
   setLevelN(((new Set(NotActivated).size / TotalUsers.length) * 100).toFixed())

   console.log("Activated F" ,new Set(Activated ) );
   console.log('Not Active F' , new Set(NotActivated));
   console.log('Total Users F' , TotalUsers );

  
  //  setNotActivated(NotActivated.length)
  //  const AllEmails = [...new Set(Activated),...new Set(NotActivated)]
  //  setAllEmail( AllEmails)

}
 
const findByGroup = (e) =>{
  // const fd =data.filter(element => {  return( element[4] != undefined && ([...element[4].split('_')][0].trim()).includes((e.target.value).trim()))})
  const fd =data.filter(element => {  return( element[4] != undefined && ([...element[4].toLowerCase().split('_')][0]    +  '_' + [...element[4].toLowerCase().split('_')][1]) == (e.target.value).toLowerCase().trim()) })
   console.log('Value is ' , e.target.value ) 
    ActivatedUsers(fd)
   console.log('All data is  ' ,fd) 
  }
useEffect(()=>{
    filterGroup()
},[data])

  return (
    <div className='my-3 flex flex-col w-auto'> 
     

          <div className="stat-title text-center"> Filter By Group </div>
          <div className=' stats shadow '>
                <div className="stat place-items-center">
                <div className="stat-title">Not Activated </div>
                <div className="stat-value">{inactive}</div>
                <div className="stat-desc"></div>
                <ProgressB level={levelN} />
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">All Users</div>
              
                <div className="stat-value text-secondary"> { total}  </div>
                <div className="stat-desc text-secondary">↗︎ (100  %)</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">Activated</div>
                <div className="stat-value"> { active  }  </div>
                <div className="stat-desc"></div>
                <ProgressB level={levelA} />
              </div>

          </div>
          <select className="select select-success w-full max-w-md mt-2"    onChange={findByGroup}>
        <option disabled selected = {true} value={"false"}>Pick your Faculte</option>
      {
        groups.sort().map((grp,i)=>{ return( <option  key={i}  value={grp}> {grp !==null && grp } </option>  )})
       }
       </select>

    </div>
  )
}

export default UsageReportF