"use client"
import {useState} from "react"
import { data } from "./CsvReader"
function TableData() {
    const [colums,setColums] = useState([])
    const [rows,setRows] = useState([])
  

  return (
   
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
        <tr>
                { colums.lenght > 0 ? ( colums.map((col,i)=> <th key={i}> {col} </th> )) : null  } 
        </tr>
     </thead>
    <tbody>
      {/* row 1 */}
      {  rows.lenght > 0 ? ( rows.map((col,i)=>{
        return (
          <tr key={i}>
            { col.map((col,i)=> <td key={i}> {col} </td> )}
          </tr>
        )
      } )) : null }
     
    </tbody>
  </table>
</div>
  )
}

export default TableData