"use client";
import React, { useState, useEffect } from "react";
import stat from "./Stat";
import { Input } from "@mui/material";
import filterGroup from "./FilterGroup";
import TestReportF from "./TestReportF";
import Sc from "./Success";
function TestReportG({ data, setter }) {
  const [check, setCheck] = useState(false);
  const [groups, setGroups] = useState([]);
  const [Group, setGroup] = useState([]);
  const [nd, setNd] = useState([]);
  const [dtgroup, setDtgroup] = useState([]);
  const [rs, setRs] = useState([]);
  const [stu, setStu] = useState([]);
  const [totales, setTotales] = useState([]);
  const [Filiere, setFiliere] = useState("");
  const FiliereChoisie = (fl) => {
    return setFiliere(fl);
  };
  const faculty = () => {
    setGroups(filterGroup(data));
    setStu(groups);
    const dtg = groups.map((group) => {
      return data.filter((element) => {
        return [...element.Group.split("_")][0].trim() == group.trim();
      });
    });
    setDtgroup(dtg);
    console.log("grs", dtg);
    const tgrs = dtg.map((d) => {
      return stat(d);
    });
    console.log("t", tgrs);
    setTotales(tgrs);
    const arr = totales.map((totale) => {
      return totale[0];
    });
    let i = 0,
      sum = 0,
      sum2 = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const arr2 = totales.map((totale) => {
      return totale[2];
    });
    for (i = 0; i < arr.length; i++) {
      sum2 += arr2[i];
    }
    const a = [sum, sum2];
    setNd(a);
    console.log("arr", arr);
    console.log("totale", sum);
    console.log("totale", sum2);

    const Sc = (data) => {
      const ubl = data.map((u) => {
        if (parseInt(u.TestResultFirst) >= 200) {
          return u.Email;
        }
      });
      const ubls = ubl.filter((u) => {
        return u != undefined;
      });
      const array = [...new Set(ubls)];
      return array.length;
    };
    const res = dtg.map((d) => {
      return Sc(d);
    });

    setRs(res);

    console.log("success", rs);
  };

  useEffect(() => {
    faculty();
    console.log("Group DATA IS:", data);
  }, [data, check, Group]);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <select
            className="select select-success w-full max-w-md mt-2"
            defaultValue={"false"}
            onChange={(e) => {
              setter(e.target.value);
              setGroup(e.target.value);
            }}
          >
            <option disabled selected value={"false"}>
              Pick your Faculty
            </option>
            <option value="All">All</option>
            {groups.map((grp, i) => {
              return (
                <option key={i} value={grp}>
                  {" "}
                  {grp !== null && grp}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-6">
          <TestReportF data={data} setter={FiliereChoisie} />
        </div>
      </div>
      <table className="table table-xs mt-5">
        <thead>
          <tr>
            <th>Faculté</th>
            <th> Nombre Utilisateurs </th> <th>Test Effectué</th>
            <th>Taux(Test Effectué/Nombre Utilisateurs) </th>
            <th>Nombre de Réussites</th>
            <th>Taux de Réussite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {groups?.map((group, i) => {
                return (
                  <tr key={i}>
                    <td class="my-2">
                      <input
                        type="checkbox"
                        key={i}
                        className=""
                        onChange={(e) => {
                          setCheck(!check);
                          if (e.target.checked) {
                            console.log("stu", stu, e.target.checked);
                          }
                        }}
                      />{" "}
                      {group == "" ? "Sans Group" : group}
                    </td>
                  </tr>
                );
              })}
            </th>

            <th>
              {totales?.map((totale, i) => {
                return (
                  <tr key={i}>
                    <td>{totale[0]}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {totales?.map((totale, i) => {
                return (
                  <tr key={i}>
                    <td>{totale[2]}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {totales?.map((totale, i) => {
                return (
                  <tr key={i}>
                    <td>{((totale[2] / totale[0]) * 100).toFixed()}%</td>
                  </tr>
                );
              })}
            </th>
            {/*rs?.map((r,i) => {
                return (
                  <tr key={i}>
                    <td>{r}%</td>
                  </tr>
                );
              })*/}

            <th>
              {rs?.map((r, i) => {
                return (
                  <tr key={i}>
                    <td>{r}</td>
                  </tr>
                );
              })}
            </th>
            <th>
              {totales?.map((t, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {t[2] !== 0 ? ((rs[i] / t[2]) * 100).toFixed() : 0}%
                    </td>
                  </tr>
                );
              })}
            </th>
          </tr>
        </tbody>
      </table>

      <div>{/*nd[0]*/}</div>
      <div>{/*nd[1]*/}</div>
    </div>
  );
}

export default TestReportG;
