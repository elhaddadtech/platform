"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Stat from "../../Components/Stat"
function UsageReport() {
  const [dataa,setDataa] = useState([])
  const [errors,setErrors] = useState([])
  const [allUsers,setAllUsers] = useState([])
const [allEmails,setAllEmail] = useState([])
const [users,setUsers] = useState(0)
const [activate,setActivate] = useState(0)
const [notActivated,setNotActivated] = useState(0)
const Users = async (data) =>{
  console.log('icii',data.length)
  // console.log( data[1][3])
   const emails = data.map( (email,index) =>{
            return email[3] // avoir
          // return email.endsWith('@uca.ac.ma')
       
   } )
  console.log('USERS ==>', new Set(emails))
  //  console.log('USERS NBR', emails.length-4)

   setUsers( ((new Set(emails)).size) -2)
   const emailArray = Array.from(new Set(emails));
   setDataa(emailArray)
 
   const Activated1 = data?.map( (record) =>{if(record[14] !=='' && record[9] !=='' ){return record[3]}} )
   const Activated = Activated1.filter((rec)=> {return rec!== undefined })
    setActivate(Activated.length-1)
    
    // const NotActivated1 = data?.map( (record) =>{if(record[14] =='' ){return record[3]}} )
    // const NotActivated = NotActivated1.filter((rec)=> {return rec!== undefined })
    // console.log("lenght of Activated",new Set(Activated))
    // console.log("lenght of Not Activated",new Set(NotActivated))
    // const AllEmails = [...new Set(Activated),...new Set(NotActivated)]
  //  console.log("All Emails ",AllEmails)
  //  const differentValues = dataa.filter(email => !allEmails.includes(email));
 
 // Output the result
//  console.log("Different values:", differentValues);
}

const getUsageReportData = async () =>{
      const data = await axios.get("http://localhost:3001/clients")
        // console.log('data is :' , JSON.parse(data.data[0].data))
        // setData(JSON.parse(data.data[0].data).flat())
        setAllUsers(JSON.parse(data.data[0].data))
    // Appel les fonctions
       await Users(JSON.parse(data.data[0].data))
        await ActivatedUsers(JSON.parse(data.data[0].data))
       
}

const ActivatedUsers = (data) => {
  const Activated1 = data?.map( (record) =>{if(record[14] !=='' && record[9] !=='' ){return record[3]}} )
  const Activated = Activated1.filter((rec)=> {return rec!== undefined })
   setActivate(Activated.length-1)
   
   const NotActivated1 = data?.map( (record) =>{if(record[14] =='' ){return record[3]}} )
   const NotActivated = NotActivated1.filter((rec)=> {return rec!== undefined })
   setNotActivated(NotActivated.length)
   const AllEmails = [...new Set(Activated),...new Set(NotActivated)]
   setAllEmail( AllEmails)
  // console.log("All Emails ",AllEmails)
  // const differentValues = dataa.filter(email => !AllEmails.includes(email));

// Output the result
//console.log("Different values:", dataa);

}

const findUsers = (e=[])=>{
   const infoUsers = e.map((e,i)=>{ 
     return  allUsers.find(email => email[3]== e )
       
   })
  
     
  console.log("found users",infoUsers)
  setErrors(infoUsers)
}
useEffect(()=>{
  getUsageReportData()
  // ActivatedUsers()
  const differentValues = dataa.filter(email => !allEmails.includes(email));
  console.log('Email Err ', differentValues)
  findUsers(differentValues)
},[dataa])


  return (
    <div>
      <Stat users={users} activate={activate} nonactivated={notActivated} info={errors}/>
    </div>
  )
}

export default UsageReport