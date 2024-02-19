
// import { useState,useEffect} from "react"
import ComptItems from "./ComptItems"
import Swap from "./Swap"
// import ThemeItems from "./ThemeItems"

function Navbar() {


  return (
    <div className="navbar  bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Rosetta Stone Platform </a>
  </div>
  <div className="flex-none gap-10">
    
           <Swap/>


    <div className="dropdown dropdown-end pr-10">
          <div tabIndex={0} className=" avatar online placeholder cursor-pointer">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                
              </div>
        </div>
          <ComptItems/>
    </div>
  </div>
</div>
   
  )
}

export default Navbar