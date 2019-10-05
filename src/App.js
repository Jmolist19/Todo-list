import React from 'react';

import './App.css';
import TodoList from './todo-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomPaginationActionsTable from './tabla-paginada.js';
import Grid from '@material-ui/core/Grid';


function Home(){
  return <h2>Home</h2>;
}

function About(){
  return <h2>About</h2>;
}

function Tasks(){
  return <h2>tasks</h2>;
}

function Navegador(){
  return (
    <Router>
        <nav>
         <ul>
            <li>

              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
      
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tasks">
            <CustomPaginationActionsTable/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>

    
  );
}



function App (){
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <header className = "App-header">   
           <h1>TodoList</h1>
          </header>
        </Grid>
        <Grid item xs = {8}> 
          <div>
            <nav>
              <Navegador/>
            </nav>
          </div>
        </Grid>
  
      </Grid>
      
    </div>
  );
}



  export default App;
