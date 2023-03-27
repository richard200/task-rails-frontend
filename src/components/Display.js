import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"
import Navigation from "./Navigation";

function Todos(todoo) {
    let [id, Setid] = useState("")
  let [todo, setTodo] = useState([])
  let [query, setQuery] = useState("")
  useEffect(() => {
    fetch("https://task-rails.onrender.com/todos", {
        method: "GET",
        crossorigin: true,
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
          },
    })
      .then((resp) => resp.json())
      .then(todo => setTodo(todo))
  }, [query])

  function handleDeleteClick(e) {
    e.preventDefault();
    fetch(`https://task-rails.onrender.com/todos/delete/${todoo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      
      }),
    }).then((r) => r.json())
    .then((data) => {
     Setid(id)
   
    });


  }



  return (
    <div>
     <Navigation/>
      <TodoList todos={todo} />

      <button className="btn btn-danger" onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
            Delete Todo:  🗑
            </span>
          </button>
    </div>
  );
}

export default Todos;