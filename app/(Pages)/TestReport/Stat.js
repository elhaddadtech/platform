const  stat =(data=[])=>{
    //==================Get Empty Records ================================///
    const vd = data.map((rec) => {
      if (rec.Level =="" ) {
        return rec.Email;
      }
    });
    const vid = vd.filter((u) => {
      return u !== undefined;
    });
    //========================================================================///
  
    //==================Get All non Duplicated Records ================================///
    const al = data.map((rec) => {
      if (rec.Email !== "") {
        return rec.Email;
      }
    });
    const all = al.filter((u) => {
      return u !== undefined;
    });
    //==========================================================================//
       //================Set Total Of Different Records ===============///
      const total = [];
  
      const vides = [...new Set(vid)];
      const allUsers = [...new Set(all)];
      total[0] = allUsers.length;
      total[1] = vides.length;
      total[2] = total[0] - total[1];
      console.log('qui n ont passé le test',vides)
      
  return total
      //========================================================//
}
export default stat



