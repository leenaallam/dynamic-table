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
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then((Data) => Data.json())
      .then((Data) => setTableData1(Data));
    // console.log(tableData1[0]);
  });

  function retheaders1() {
    //tableData1.map

    for (var key in tableData1[0]) {
      // console.log(tableData1[0]);

      return Object.keys(tableData1[0]).map((key) => <th>{key}</th>);
    }
  }

  function retrows1() {
    var col = [];
    var col2 = [[]];
    const col3 = "";
    for (var key in tableData1[0]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }

    for (var i = 0; i < tableData1.length; i++) {
      for (var key in tableData1[i]) {
        return Object.keys(tableData1[i]).map((key, index) => (
          <td>{tableData1[i][key]}</td>
        ));
      }
    }
  }

  return (
    <div>
      {" "}
      <div className="searchbar">
        {" "}
        <Searchicon className="searchicon" />
        <label className="searchname">
          <input
            style={{
              border: "none",
              outline: "none",
              color: "#90a0b7",
              fontSize: "1vw",
            }}
            placeholder="Search"
          />
        </label>
      </div>
      <Filter />
      <table id="table1">
        <thead>
          <tr> {retheaders1()}</tr>
        </thead>
        <tbody>
          <tr>{retrows1()}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
