import React, { useState, useEffect } from "react";
import Search from "./searchbar.js";
import Filter from "./filter.js";
import "../stylesheets/table.css";
import Dataa from "../tabladata.json";
import { ReactComponent as Searchicon } from "../icons/search.svg";

import "../stylesheets/search.css";

const Table = () => {
  const [tableData1, setTableData1] = React.useState([]);
  const [tableData2, setTableData2] = React.useState([]);
  const [col1, setCol] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((Data) => Data.json())
      .then((Data) => setTableData1(Data));
    // console.log(tableData1[0]);
  }, []);

  function retheaders1() {
    //tableData1.map

    for (var key in tableData1[0]) {
      // console.log(tableData1[0]);

      return Object.keys(tableData1[0]).map((key) => {
        return <th>{key}</th>;
      });
    }
  }

  function retrows1() {
    return tableData1.map((row) => {
      return (
        <tr>
          <td>
            <input type="checkbox" />
          </td>

          {Object.keys(row).map((key, index) => (
            <td>{row[key].toString()}</td>
          ))}
        </tr>
      );
    });
    // for (var key in tableData1[i]) {
    //   return Object.keys(tableData1[i]).map((key, index) => (
    //     <td>{tableData1[i][key]}</td>
    //   ));
    // }
  }

  return (
    <div>
      {" "}
      <div className="searchbar">
        {" "}
        <Searchicon className="searchicon" />
        <input
          className="searchname"
          style={{
            border: "none",
            outline: "none",
            color: "#90a0b7",
            fontSize: "1vw",
          }}
          placeholder="Search"
          onChange={(e) => {
            setCol(e.target.value);
          }}
        />
      </div>
      <Filter />
      <table id="table1">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            {retheaders1()}
          </tr>
        </thead>
        <tbody>
          {retrows1()}
          <tr> </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
