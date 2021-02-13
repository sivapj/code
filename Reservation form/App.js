
import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Component } from 'react';
import Reservationform from './Reservationform';


class App extends Component {


  render (props){
    
   
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/form">Form</Link>
          </div>
          <Switch>
            <Route path="/form">
              <Reservationform/>
            </Route>
          </Switch>
                   
       </div>
      </Router>
     
    )
  }
}

export default App;