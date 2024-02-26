'use client'
import React, { useState } from 'react'


function Selectt({data=[],name='',setter}) {
  const [lgs,setLgs] = useState('')
  return (
    <select className="select select-info w-full max-w-xs" onChange={(e)=>{setter(e.target.value)}} >
  <option disabled selected >Select {name} </option>
{
  data?.map((e,i)=>{ return ( <option value={e} key={i}>{e} </option>) })
  
}

</select>
  )
}

export default Selectt