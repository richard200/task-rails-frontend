import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"
import Navigation from "./Navigation";

function Todos() {

  let [todos, setTodos] = useState([])
  let [query, setQuery] = useState("")

  useEffect(() => {
    fetch("https://task-rails.onrender.com/todos", {
      method: "GET",
      crossorigin: true,
      mode: "no-cors",
    })
   
      .then((resp) => resp.json())
      .then(data => {setTodos(data)
      })

  }, [query])

  // function handleDeleteClick(e) {
  //   e.preventDefault();
  //   fetch(`https://task-rails.onrender.com/todos/${todoo.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id,
      
  //     }),
  //   }).then((r) => r.json())
  //   .then((data) => {
  //    Setid(id)
   
  //   });


  // }



  return (
    
    <div>

{/* <span className="sign-up-button">
    <Link to="/" className="showing-sign">
        <span className="signing-now">Logout</span>

    </Link>

</span> */}
<AddTodo/>
 <TodoList 
            todos= {todos}
            // addBot={addBot}
            // deleteBot={deleteBot}
 />




 </div>
  );
}

export default Todos;