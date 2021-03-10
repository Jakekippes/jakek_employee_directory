import React from "react";
//comment

function EmployeeTable(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.email}</td>
      <td>{props.gender}</td>
    </tr>
  );
}
export default EmployeeTable;