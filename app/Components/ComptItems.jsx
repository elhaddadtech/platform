"use client"

const ComptItems = () => {
    const Logout = () => { 
        // localStorage.removeItem("token");
        window.location = "/";
    }
  return (
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a className="justify-between">
        Full Name
      </a>
    </li>
    <li className='cursor-pointer' onClick={Logout}  ><a>Logout</a></li>
  </ul>
  )
}

export default ComptItems
