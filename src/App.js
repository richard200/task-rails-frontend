
import './App.css'
import Login from './components/Login';
import Display from './components/Display';
// import Home from './components/Home';
// import Update from './components/Update';

import {  Switch, Route} from 'react-router-dom';
import SignUp from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Navigation from './components/Navigation';



function App() {
  return (

    <Router>
    <div style={{ 
      backgroundImage: `url("https://raw.githubusercontent.com/Zackazt/MemeCreator/master/src/bg.jpg")` 
    }} className="App">
      <h1 className='header'>Todo Creator</h1>
     
      <Switch>
      <Route exact path="/" component={Navigation} />
      <Route exact path="/register" component={SignUp} />
      <Route path="/login" component={Login}  />
      <Route path="/create" component={AddTodo}  />
      <Route path="/todos" component={Display}  />
      
        
      </Switch>
   
    
   
    </div>
    </Router>

     
  
    
   
  
  
  );
}

export default App;
