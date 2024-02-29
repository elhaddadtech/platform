"use client"
import { useEffect, useState } from "react"
import UsageReportG from './UsageReportG'
import UsageReportF from './UsageReportF'
import axios from "axios"
import Stat from "../../Components/Stat"
function UsageReport() {
     





  return (
    <div className="container mx-auto">
     <div className="text-center">  Result </div>
     <hr className="h-10 my-3" />
     <div className="flex flex-wrap justify-around items-center gap-4 ">
      Table Data 
     
     </div>
    </div>
  )
}

export default UsageReport