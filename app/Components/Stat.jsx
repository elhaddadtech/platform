"use client"
import React, { useEffect ,useState} from 'react'

//function Stat({props}) {
    // const [users,setUsers] = useState(props.users ? props.users : 0 )
function Stat({users,activate,info,nonactivated}) {
    // const [users,setUsers] = useState(users ? users : 0 )
 
  return (
    <div className="stats shadow">
  
    <div className="stat place-items-center">
      <div className="stat-title">Not Activated Users </div>
      <div className="stat-value">{nonactivated}</div>
      <div className="stat-desc"></div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">All Users</div>
     
      <div className="stat-value text-secondary"> {users ==0 ? <span className="loading loading-spinner text-info"></span> : users }  </div>
      <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Activated Users</div>
      <div className="stat-value"> {activate ==0 ? <span className="loading loading-spinner text-info"></span> : (activate+info.length-1) }  </div>
      <div className="stat-desc"></div>
    </div>
    <div className="stat place-items-center">
      {/* <div className="stat-title">Errors Rosetta Source File <div className="badge badge-secondary">+99</div></div> */}
      <div className="stat-title">Other Activated Users</div>
      <div className="stat-value"> {info.length ==0 ? <span className="loading loading-spinner text-info"></span> : info.length-1  }  </div>
      <div className="stat-desc"></div>
    </div>
    
  </div>
  )
}

export default Stat

