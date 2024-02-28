"use client";
import React, { useEffect, useState } from "react";
import Selectt from "../Components/Selectt";
function TestStat({ langues, data }) {
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
    //==================Get Empty Records ================================///
    const vd = data.map((rec) => {
      if (rec[15] == "") {
        return rec[3];
      }
    });
    const vid = vd.filter((u) => {
      return u !== undefined;
    });
    //========================================================================///

    //==================Get All non Duplicated Records ================================///
    const al = data.map((rec) => {
      if (rec[3] !== "") {
        return rec[3];
      }
    });
    const all = al.filter((u) => {
      return u !== undefined;
    });
    //==========================================================================//

    //==================Get Levels ================================///
    const dt = data.filter((rec) => {
      if (
        rec[4] != null &&
        rec[4] != "" &&
        rec[0] == "Universite Cadi Ayyad - Marrakech"
      ) {
        return rec;
      }
    });

    const usrs = dt.filter((rec) => {
      return rec[15] !== "" && rec[5] == langue;
    });

    const levels = usrs.map((u) => {
      return u[15];
    });

    const nvs = [...new Set(levels)].sort();
    setNiveaux(nvs);
    /////////////////////////////////////////////////////////////////////////////////

    //================Set Total Of Different Records ===============///
    const total = [];

    const vides = [...new Set(vid)];
    const allUsers = [...new Set(all)];
    total[0] = allUsers.length;
    total[1] = vides.length;
    total[2] = total[0] - total[1];
    setTotale(total);

    //========================================================//

    //========================Get Number of Users Filtered By language and Level========================///
    const usersByLevel = (langue, niveau) => {
      const ubl = data.map((u) => {
        if (u[5] == langue && u[15] == niveau) {
          return u[3];
        }
      });
      const ubls = ubl.filter((u) => {
        return u != undefined;
      });
      const array = [...new Set(ubls)];
      return array.length;
    };
    //====================================================================================/////

    //========================Get Number of users Filtered By Success factor(Test Results >=200) ========================///
    const Sc = (langue, niveau) => {
      const ubl = data.map((u) => {
        if (u[5] == langue && u[15] == niveau && parseInt(u[10]) >= 200) {
          return u[3];
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
    console.log("initial data", data);
    console.log("usersbY Group (Not Null,UCA,Not Empty", [...new Set(dt)]);
    console.log("Choosed Language", langue);
    console.log("Users Filtered by Language and level", arr);
    console.log("Users in Current language", usrs);
    console.log("level of user in current language", levels);

    console.log("Levels", niveaux);

    console.log("With language level  Record Empty", [...new Set(vid)]);
    console.log("Success Statistics:", arr1);
    console.log("all non duplicated users", [...new Set(all)]); //ALL USERS
  };

  useEffect(() => {
    fltrs();
  }, [langue]);
  return (
    <div className="overflow-x-auto">
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

      <table className="table table-xs mt-5">
        <thead>
          <tr>
            <th>
              {" "}
              <Selectt
                setter={langueChoisie}
                data={langues}
                name={"langue"}
              />{" "}
            </th>

            <th>
              <th> Niveau Actuel </th>{" "}
            </th>
            <th>Nombre Utilisateurs</th>
            <th>Réussite Résultats Test</th>
            <th>Taux de Réussite</th>
            <th>Taux d'Echec</th>
            <th>Moyen Générale Université</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>

            <th>
              {niveaux?.map((niveau) => {
                return (
                  <tr>
                    <td>{niveau}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {nbusers?.map((nbuser) => {
                return (
                  <tr>
                    <td>{nbuser}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {success?.map((succes) => {
                return (
                  <tr>
                    <td>{succes}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {rsuccess?.map((succes) => {
                return (
                  <tr>
                    <td>{succes.toFixed()}%</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {failure?.map((f) => {
                return (
                  <tr>
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
