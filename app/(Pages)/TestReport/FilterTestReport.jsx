"use client"
import React,{useState,useEffect} from 'react'
import TestStat from '../../Components/TestStat'
function FilterTestReport({data,languages,Group,Filiere=''}) {
    const [language, setLanguage] = useState("");
    const [langues,setLangues] = useState([])
    const [Groupe,setGroupe] = useState('')
    const[dt,setDt]=useState([])
    /* const lg= dt.map((lng) => { return lng.Language }
     )
     console.log("data ",dt)
     const lgs = [...new Set(lg)]
*/

    const filterByGroup = ()=>{
        
        setGroupe(Group)
        const dataByGroup=data.filter(element => {  return(  ([...element.Group.split('_')][0].trim()) == Group.trim()) })

        const lg= dataByGroup.map((lng) => { return lng.Language }
     )
     
     
     const lgs = [...new Set(lg)]
     const lges = lgs.filter((lg)=>{ return lg !=undefined })
     console.log("languages New",lges)
     setLangues(lges)
    setDt(dataByGroup)
    console.log("data by group",dataByGroup)
    }

    useEffect(()=>{
        filterByGroup ()},[Group]
    ) 

    if(Group=='All')
    {return (
        <TestStat  languages={languages} data={data} />
    )}
    else
    {
        return(
            <TestStat  languages={langues} data={dt} />
        )
    }

    
   
  
}

export default FilterTestReport