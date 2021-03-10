import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import JSONDATA from "./components/MOCK_DATA.json";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      
      <Table className="table table-striped">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        <tbody>
          {JSONDATA.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => (
            <EmployeeTable
              key={val.id}
              id={val.id}
              first_name={val.first_name}
              last_name={val.last_name}
              email={val.email}
              gender={val.gender}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
