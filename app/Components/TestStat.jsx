"use client";
import React, { useEffect, useState } from "react";
import stat from '../(Pages)/TestReport/Stat'
import Selectt from "./Selectt";
import filterGroup from "../(Pages)/TestReport/FilterGroup";
function TestStat({ languages, data ,Groups='',lge=''}) {
  const [langue, setLangue] = useState("");
  const [niveaux, setNiveaux] = useState();
  const [nbusers, setNbusers] = useState();
  const [success, setSuccess] = useState();
  const [rsuccess, setRsuccess] = useState();
  const [failure, setFailure] = useState();
  const [totale, setTotale] = useState([]);
 

  const langueChoisie = (lg) => {
    return setLangue(lg);
  };



  const fltrs = () => {
    setTotale(stat(data));

    //==================Get Levels ================================///
    const dt = data.filter((rec) => {
      if (
        rec.Group != null &&
        rec.Group != "" &&
        rec.Email !== ""
      ) {
        return rec;
      }
    });

    const usrs = dt.filter((rec) => {
      return rec.Level !== "" && rec.Language == langue;
    });

    const levels = usrs.map((u) => {
      return u.Level;
    });

    const nvs = [...new Set(levels)].sort();
    setNiveaux(nvs);
    /////////////////////////////////////////////////////////////////////////////////

 
    //========================Get Number of Users Filtered By language and Level========================///
    const usersByLevel = (langue, niveau) => {
      const ubl = data.map((u) => {
        if (u.Language == langue && u.Level == niveau) {
          return u.Email;
        }
      });
      console.log("ubl",ubl)
      const ubls = ubl.filter((u) => {
        return u != undefined;
      });
      console.log("ubls",ubls)
      const array = [...new Set(ubls)];
      return array.length;
    };
    //====================================================================================/////

    //========================Get Number of users Filtered By Success factor(Test Results >=200) ========================///
    const Sc = (langue, niveau) => {
      const ubl = data.map((u) => {
        if (u.Language == langue && u.Level == niveau && parseInt(u.TestResultFirst) >= 200) {
          return u.Email;
        }
      });
      const ubls = ubl.filter((u) => {
        return u != undefined;
      });
      const array = [...new Set(ubls)];
      return array.length;
    };
    //====================================================================================/////

    //========================Set Statistics of Users Filtered By language and level ========================///
    const arr = nvs.map((i) => usersByLevel(langue, i));
    setNbusers(arr);
    const arr1 = nvs.map((i) => Sc(langue, i));
    setSuccess(arr1);
    const arr2 = Array(nvs.length);
    const arr3 = Array(nvs.length);
    let i = 0;
    for (i = 0; i < nvs.length; i++) {
      arr2[i] = (arr1[i] / arr[i]) * 100;
      arr3[i] = 100 - arr2[i];
    }

    setRsuccess(arr2);
    setFailure(arr3);

    //===========================================================================///

    /////////////////////////Console //////////////////////////
   /* console.log("all users",allUsers)
    /*console.log("initial data", data);
    console.log("usersbY Group (Not Null,UCA,Not Empty", [...new Set(dt)]);
    console.log("Choosed Language", langue);*/
   /* console.log("langue ",langue)
    console.log("Users Filtered by Language and level", arr);*/
    /*console.log("Users in Current language", usrs);
    console.log("level of user in current language", levels);

    console.log("Levels", niveaux);

    console.log("With language level  Record Empty", [...new Set(vid)]);
    console.log("Success Statistics:", arr1);
    console.log("all non duplicated users", [...new Set(all)]); //ALL USERS
    */
  };

  useEffect(() => {
    stat(),
    fltrs();
  }, [langue]);
  return (
    <div className="overflow-x-auto text-center">
      <div className="stats shadow mb-5">
        <div className="stat place-items-center">
          <div className="stat-title">Tous les Utilisateurs</div>
          <div className="stat-value">{totale[0]}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">
            Test non Effectué
          </div>
          <div className="stat-value text-secondary">{totale[1]}</div>
          <div className="stat-desc text-secondary"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">
          Test Effectué
          </div>
          <div className="stat-value">{totale[2]}</div>
          <div className="stat-desc"></div>
        </div>
      </div>

      <table className="table table-xs mt-5">
        <thead>
          <tr>
            <th>
              {" "}
              <Selectt
                setter={langueChoisie}
                data={languages}
                name={"langue"}
              />{" "}
            </th>

            <th>
              <th> Niveau Actuel </th>{" "}
            </th>
            <th>Nombre Utilisateurs</th>
            <th>Réussite Résultats Test {'( >=200/400)'}</th>
            <th>Taux de Réussite</th>
            <th>Taux d'Echec</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>

            <th>
              {niveaux?.map((niveau,i) => {
                return (
                  <tr key={i}>
                    <td>{niveau}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {nbusers?.map((nbuser,i) => {
                return (
                  <tr key={i}>
                    <td>{nbuser}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {success?.map((succes,i) => {
                return (
                  <tr key={i}>
                    <td>{succes}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {rsuccess?.map((succes,i) => {
                return (
                  <tr key={i}>
                    <td>{succes.toFixed()}%</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {failure?.map((f,i) => {
                return (
                  <tr key={i}>
                    <td>{f.toFixed()}%</td>
                  </tr>
                );
              })}
            </th>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
}

export default TestStat;
