"use client"
import React, { useEffect ,useState} from 'react'

//function Stat({props}) {
    // const [users,setUsers] = useState(props.users ? props.users : 0 )
function Stat({users,activate}) {
    // const [users,setUsers] = useState(users ? users : 0 )
 
  return (
    <div className="stats shadow">
  
    <div className="stat place-items-center">
      <div className="stat-title">Not Activated</div>
      <div className="stat-value">0</div>
      <div className="stat-desc"></div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Users</div>
      <div className="stat-value text-secondary"> {users} </div>
      <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Activated</div>
      <div className="stat-value"> {activate}  </div>
      <div className="stat-desc"></div>
    </div>
    
  </div>
  )
}

export default Stat

