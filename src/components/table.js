import React, { useState, useEffect } from "react";
import "../stylesheets/table.css";
import { ReactComponent as Actions } from "../actions.svg";
const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
];

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  const renderCol1 = (tableData, id) => {
    return (
      <tr key={id}>
        <td>
          {" "}
          <input type="checkbox" />
        </td>

        <td>{tableData.country}</td>
        <td>{tableData.web_pages}</td>
        <td>{tableData.name}</td>

        <td>{tableData.alpha_two_code}</td>

        <td>{tableData.domains}</td>

        <td>
          <Actions />
        </td>
      </tr>
    );
  };

  return (
    <div>
      {" "}
      <table>
        {" "}
        <th className="headers">
          {" "}
          <input type="checkbox" />{" "}
        </th>
        <th className="headers">Country</th>
        <th className="headers">Web pages</th>
        <th className="headers">Name</th>
        <th className="headers">Alpha twocode</th>
        <th className="headers">Domains</th>
        <th className="headers">Actions</th>
        {tableData.map(renderCol1)}
      </table>
      ;
    </div>
  );
};

export default Table;
