import React, { useState } from "react";
import {Link} from 'react-router-dom'

function TodoCard({ todo}) {
    let [id, Setid] = useState("")
  //   let [name, setName] = useState("")
  //     let [text_top, setTextTop] = useState("");
  // let [text_bottom, setTextBottom] = useState("");


    function handleDeleteClick(e) {
        e.preventDefault();
        fetch(`https://task-rails.onrender.com/todos/${todo.id}`, {
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

      // function handleUpdateMeme(e) {
      //       e.preventDefault();
        
      //       fetch(`https://meme-generator-backend.onrender.com/memes/update/${meme.id}`, {
      //         method: "PATCH",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           name: name,
      //           text_top: text_top,
      //           text_bottom: text_bottom
      //         }),
      //       })
      //       .then((r) => r.json())
      //       .then((data) => {
      //         Setid(id)
      //         setName(name)
      //        setTextTop(text_top)
      //        setTextBottom(text_bottom)
      //       });
      //   }

  return (

    <div className="card col-6 mt-5 h-100 shadow p-3 mb-5 mb-sm-5 bg-body rounded"
    key={todo.id}>
       <div className="card-body" >
      
        {/* <h6 className="date">Name: {meme.name} </h6> */}
           
        <p className="title">Title: {todo.title}</p>
          
        <p className="description">Description: {todo.descrption}</p>
        <br>
        </br>
        <br></br>
   
        <h5 className="status">Status: {todo.status}</h5>
   
        <h5 className="priority">Priority: {todo.priority}</h5>

     <button className="btn btn-danger" onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
            Delete Todo:  🗑
            </span>
          </button>


  </div>
  </div>
   );
  }

  export default TodoCard;