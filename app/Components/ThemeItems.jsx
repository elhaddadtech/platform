"use client"

import { useEffect, useState } from "react"

function ThemeItems() {
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(()=>{
        localStorage.setItem("theme",theme)
        const Theme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme",Theme)
    },[theme])
  return (
    <div>
        <li className=' text-bold cursor-pointer ' onClick={()=>{setTheme("light") } }> light </li>
        <li className=' text-bold py-3  cursor-pointer  '  onClick={()=>{setTheme("dark")}} >dark</li>
        <li className=' text-bold cursor-pointer  '  onClick={()=>{setTheme("cupcake")}} >cupcake</li>
    </div>
  )
}

export default ThemeItems