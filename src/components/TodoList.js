import React from "react";
import TodoCard from "./TodoCard";

function TodoList({todos}) {
  let todoItem= todos.map((todo)=> {
    return <TodoCard
    key={todo.id} 
    todo = {todo}
    />
    // title={item.title} 
    // descrption={item.descrption}
    // status={item.status}
    // priority={item.priority} />;
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
        {todoItem}
      </tbody>
    </table>
  );
}

export default TodoList;