"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Stat from "../../Components/Stat"
function UsageReport() {
// const [data,setData] = useState([])
const [users,setUsers] = useState(0)

const Users = async (data) =>{
  console.log('icii',data.length)
 
   const emails = data.flat().filter( (email) =>{
          return email.includes('@')
          // return email.endsWith('@uca.ac.ma')
       
   } )

   setUsers( (new Set(emails)).size)
   console.log(emails.length)
 
}

const getUsageReportData = async () =>{
      const data = await axios.get("http://localhost:3001/clients")
        console.log('data is :' , JSON.parse(data.data[0].data))
        // setData(JSON.parse(data.data[0].data).flat())

    // Appel les fonctions
       await Users(JSON.parse(data.data[0].data))
        await ActivatedUsers(JSON.parse(data.data[0].data))
       
}

const ActivatedUsers = (data) => {
  const Activated = data?.data.slice(0,30).map( (record) =>{
      record.map((value,key) =>{
          console.log(value); 
        })
} )
console.log('email 123',Activated);

}



useEffect(()=>{
  getUsageReportData()
  ActivatedUsers()
},[])


  return (
    <div>
      <Stat users={users} activate={10} />
    </div>
  )
}

export default UsageReport