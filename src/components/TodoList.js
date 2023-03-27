import React from "react";
import Todo from "./Todo";

function TodoList({todos}) {
  let todoList = todos.map((item)=> {
    return <Todo 
    key={item.id} 
    title={item.title} 
    descrption={item.descrption}
    status={item.status}
    priority={item.priority} />;
  })
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>
            <h3 className="title">Title</h3>
          </th>
          <th>
            <h3 className="descrption">Description</h3>
          </th>
          <th>
            <h3 className="status">Status</h3>
          </th>
          <th>
            <h3 className="priority">Priority</h3>
          </th>
        </tr>
        {todoList}
      </tbody>
    </table>
  );
}

export default TodoList;