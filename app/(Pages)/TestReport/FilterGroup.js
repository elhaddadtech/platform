const filterGroup = (data=[])=>{
    const GroupSplited =[...new Set(data.map((rec )=> {if (rec.Group != undefined){return rec.Group.split('_') }} ))]
    const Grps = (GroupSplited.filter(element => {return( element !== undefined )}))
    const Groups = new Set( Grps.map((gr,i) =>{ return gr[0]}))
    return [...Groups]
   
}

export default filterGroup