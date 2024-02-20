"use client"
import CsvReader from "../../Components/CsvReader"
import TableData from "../../Components/TableData"

function Upload() {
  return (
    <div className='container mx-auto  flex flex-col gap-10'>
       <div className='h-16 '> <CsvReader/></div>
       <div className='h-16 '> <CsvReader/></div>
       <div className='h-16 '> <CsvReader/></div>
       <div className='h-16 '> <CsvReader/></div>
      <div className='m' > <TableData /></div>

    </div>
  )
}

export default Upload