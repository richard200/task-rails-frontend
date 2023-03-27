import React from "react";

function Todo({title, descrption, status, priority}) {
  return (
    <tr>
      <td>{title}</td>
      <td>{descrption}</td>
      <td>{status}</td>
      <td>{priority}</td>
    </tr>
  );
}

export default Todo;