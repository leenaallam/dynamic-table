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

      return Object.keys(tableData1[0]).map((key) => <th>{key}</th>);
    }
  }

  function retrows1() {
    // var col = [];
    // var col2 = [[]];
    // const col3 = "";
    // for (var key in tableData1[0]) {
    //   if (col.indexOf(key) === -1) {
    //     col.push(key);
    //   }
    // }
    // const all = [];

    return tableData1.map((row) => {
      return (
        <tr>
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
        />
      </div>
      <Filter />
      <table id="table1">
        <thead>
          <tr> {retheaders1()}</tr>
        </thead>
        <tbody>{retrows1()}</tbody>
      </table>
    </div>
  );
};

export default Table;
