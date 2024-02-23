"use client"
import React, { useEffect ,useState,useRef} from 'react'

//function Stat({props}) {
    // const [users,setUsers] = useState(props.users ? props.users : 0 )
function Stat({users,activate,info=[],nonactivated}) {
    const [disUsers,setDisUsers] = useState({info})
    const modalRef = useRef(null);

    const openModal = () => {
            if (modalRef.current) {
              modalRef.current.showModal();
            }
          };
    
    const displayUsers = () =>{
      console.log('Disoplay Users ', info )
    }
 
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
      <div className="stat-desc text-secondary">↗︎ (100  %)</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Activated Users</div>
      <div className="stat-value"> {activate  ==0 ? <span className="loading loading-spinner text-info"></span> : (activate+info.length-1) }  </div>
      {/* <div className="stat-value"> {activate ==  0 ? <span className="loading loading-spinner text-info"></span> : (activate+info.length-1) }  </div> */}
      <div className="stat-desc"></div>
    </div>
 
      <div className="stat place-items-center cursor-pointer hover:bg-lime-300" title='Click To Display it !' onClick={openModal} >
      {/* <div className="stat-title">Errors Rosetta Source File <div className="badge badge-secondary">+99</div></div> */}
      <div className="stat-title">Other Activated Users</div>
      <div className="stat-value"> {info.length ==0 ? <span className="loading loading-spinner text-info"></span> : info.length-1  }  </div>
      <div className="stat-desc"></div>
    </div>





  {/* Modal */}
  <dialog id="my_modal_4" className="modal" ref={modalRef}>
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Other Activated Users</h3>
    <div className="py-4">
      
    <table className='table'>
              <thead>
              <tr>
                <th>N°</th>
                <th>Organisation</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Group (s)</th>
                <th>License</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
                {
                 
                  info?.map((usr,index)=>{ 
                    if (usr[info.length] !=undefined){
                      return (
                              <tr key={index}> 
                                <td> {index + 1} </td>
                                <td> {usr[0]} </td> 
                                <td> {usr[1]} </td> 
                                <td> {usr[2]} </td> 
                                <td> {usr[3]} </td> 
                                <td> {usr[4]} </td> 
                                <td> {usr[9] == "" ? <span className='text-error'> No license </span> :usr[9] } </td> 
                                <td> {usr[14]} </td> 
                              </tr>
                            )  
                  }
                   })
                } 
            </tbody>
      </table>

    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>



    
  </div>
  )
}

export default Stat

