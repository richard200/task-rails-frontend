import React, { useState } from "react"
import Navigation from "./Navigation"

function AddTodo() {
  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [status, setStatus] = useState("")
  let [priority, setPriority] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("https://task-rails.onrender.com/todos/create", {
    method: "POST",
    crossorigin: true,
    mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        status: status,
        priority: priority,
      }),
    });
  }
  return (
    <div className="main">
          <Navigation/>
      <form onSubmit={handleSubmit} className="form">
        <div className="data">
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Todo Title " required />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" required />
          {/* <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" required /> */}
          <input value={priority} onChange={(e) => setPriority(e.target.value)} type="text" name="priority" placeholder="Prority" step="0.01" required />
        </div>
        <button className="submit-button" type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;