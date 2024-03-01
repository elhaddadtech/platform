import React, { useEffect,useState } from 'react'
import FilterFiliere from './FilteFiliere'
function TestReportF({data,setter}) {
    const [filieres,setFilieres] = useState([])


    const flr=()=>{
        setFilieres(FilterFiliere(data))
    }
    useEffect(()=>{
    flr()
    },[data])
  return (
    <div>
        <select className="select select-success w-full max-w-md mt-2" defaultValue={'false'} onChange={(e)=>setter(e.target.value)}>
             <option disabled selected value={"false"}>Filiere</option>
             <option value="All">All</option>
                   {
                    filieres.map((filiere,i)=>{ return( <option  key={i}  value={filiere}> {filiere !==null && filiere } </option>  )})
                     }
             </select>
     </div>
  )
}

export default TestReportF