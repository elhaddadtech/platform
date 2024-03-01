import React, { useEffect } from 'react'
import { useState } from 'react'

function Statistics({data,Group}) {
  const [dt,setDt] =useState([])
  const [gr,setGr] =useState('')
    const [totale,setTotale] =useState([])
   

    const stats = (Group)=>{
      setGr(Group)
      setDt(data)
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
        setTotale(total);
    
        //========================================================//

        useEffect(()=>
        {
          stats(Group)
        },[Group]
        )
  }
  
  return (
    <div className="stats shadow ">
    <div className="stat place-items-center">
      <div className="stat-title">Tous les Utilisateurs</div>
      <div className="stat-value">{totale[0]}</div>
      <div className="stat-desc">From January 1st to February 1st</div>
    </div>

    <div className="stat place-items-center">
      <div className="stat-title">
        Utilisateurs qui n'ont pas passé le test
      </div>
      <div className="stat-value text-secondary">{totale[1]}</div>
      <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>

    <div className="stat place-items-center">
      <div className="stat-title">
        Utilisateurs qui ont pas passé le test
      </div>
      <div className="stat-value">{totale[2]}</div>
      <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
  </div>
  )
}

export default Statistics