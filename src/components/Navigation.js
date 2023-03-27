import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Navigation() {
  return (
    <div className="container-fluid">
<nav id="navBar" className="navbar navbar-expand-lg bg-body-tertiary ">  

        <Link id="home" className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
          <ul className="navbar-nav justify-content-start">

            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Signup</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">Create a Todo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todos">View Your Todos</NavLink>
            </li>
          </ul>
        
      </nav>
     
    
      </div>
  
  );
}


export default Navigation; 