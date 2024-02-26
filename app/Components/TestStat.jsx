"use client"
import React, { useEffect, useState } from 'react'
import Selectt from '../Components/Selectt'

function TestStat({langues,data}) {
  const [langue,setLangue] =useState('')
  const [niveaux,setNiveaux] =useState()
  const [nbusers,setNbusers] =useState()
  const langueChoisie = (lg) =>{ return setLangue(lg)}
  console.log('langue choisie', langue)
 
const fltrs = () =>{
  const vd =data.map((rec)=>{
    if(rec[15]=='')
    {return rec[3]}
    })
    const fl = vd.filter((u)=>{ return u !== undefined})
    
      const usrs =data.filter((rec)=>{
    if(rec[15]!=='' && rec[5]==langue)
    {return rec}
    })
   
  const levels =usrs.map((u)=>{
      return u[15]
      })
      const nvs =[...new Set(levels)].sort()
      setNiveaux(nvs)

      
     /* setNiveaux(nvx)*/
      console.log("usrs",usrs);
      const arr =Array(nvs.length)
      let i=0,j=0,s=0
      for(i=0;i<nvs.length;i++)
      {
        arr[i]=0
      }
      for(i=0;i<nvs.length;i++)
       for(j=0;j<levels.length;j++)
        {
           if(nvs[i]==levels[j])
           arr[i]=arr[i] +1
         }
      
         setNbusers(arr)
  
         for(i=0;i<arr.length;i++)
         {
           s=arr[i]+s
         }

console.log("levels",levels);
console.log("niveaux",niveaux);
console.log("filtered users",arr);
console.log("totalUsers",s);
console.log("vides", [...new Set(fl)] );

}
 

/* const nvx = data.map((rec)=>{return rec[9]})*/
 
 
 useEffect(()=>
 {
 fltrs()

 },[langue])
  return (
    <div className="overflow-x-auto">
    <table className="table table-xs">
      <thead>
        <tr>
          <th > <Selectt setter={langueChoisie} data={langues} name={'langue'}  /> </th> 
          
          <th><th>  Niveau </th> </th> 
          <th>Nombre Utilisateurs</th> 
          <th>Réussite</th> 
          <th>Echec</th> 
          <th>Moyen Générale Université</th>
        </tr>
      </thead> 
      <tbody>
        <tr>
            <th></th>
            
            <th>{
             
            niveaux?.map((niveau,i)=>{
                return (
                    <tr>
                        <td key={i}>
                            {niveau}
                        </td>
                       
                    </tr>
                )
            })
          }</th>
            <th>
            {
             
             nbusers?.map((nbuser,i)=>{
                 return (
                     <tr>
                         <td key={i}>
                             {nbuser}
                         </td>
                        
                     </tr>
                 )
             })
           }
            </th>
            <th></th>
            <th></th>
        </tr>
        
      </tbody> 
    





    </table>
  </div>
  )
}

export default TestStat