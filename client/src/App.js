import React, { Component } from 'react';
import Students from './components/Students'
import {BrowserRouter as Router, Link, Switch, Route, Redirect, Prompt} from 'react-router-dom';
import AddStudent from './components/AddStudent';
// import './App.css';

class App extends Component {
  render() {
    return <div className="App">
    <Router>
      <div>
        <ul>
        <li><Link to="/add-student">Add Student</Link></li>
        <li><Link to="/students/api">Students Api</Link></li>
          </ul>
      
   
      <Switch>
        <Route path = "/add-student" component = {AddStudent} />
        <Route path = "/students/api" component = {() => <p>Students Api</p>} />
        <Route path = "/" component = { Students } />
      </Switch>
      </div>

      </Router>

      
      </div>;
  }
}

export default App;
