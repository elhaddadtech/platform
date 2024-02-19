import React from 'react'
import Navbar from "./Navbar"
import MenuTooltip from "./MenuTooltip"
function Template({content}) {
  return (
    <div className=''>
        <div className=" bg-pink-800">
          <Navbar />
        </div>
        <div className="flex ">
              
                <MenuTooltip/>
          
          <div className="p-4 w-full" >
            {content}
          </div>
        </div>
    </div>
  )
}

export default Template