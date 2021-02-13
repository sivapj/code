import logo from './logo.svg';
import React from 'react';
import './App.css';
import classes from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Test from './Test';
// import Username from './Username';
// import Password from './Password';
// import Login from './Login';
// import Content from './Content';
// import Error from './Error';
import { Component } from 'react';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef= React.createRef();
  //   this.passRef = React.createRef();
  // }
  // componentDidMount(){
  //   this.myRef.current.focus();
  // }

  // state = {
  //   username: "",
  //   password: "", 
  //   errorMessage:"", 
  //   stateDetails:false,
  // }
  // changeName = (event) => {
  //   let newState = {...this.state};
  //   newState["username"] = event.target.value;
  //   newState["stateDetails"] = false;
  //   this.setState((this.state = newState));

  // }
  // changePassword = (event) => {
  //   let newState = {...this.state};
  //   newState["password"] = event.target.value;
  //   newState["stateDetails"] = false;
  //   this.setState((this.state = newState));
  // }
  // validation = () => {
  //   let newState ={...this.state};
  //   if(
  //     newState["username"] === "johndoe" && 
  //     newState["password"] === "JohnDoe@1"
  //   )  
  //    {
  //     alert("Login Successfully");
  //    } else {
  //     let newStateDetails ={...this.state};
  //     newStateDetails["stateDetails"] = true;
  //     if (newState["username"] !== "johndoe") {
  //       newStateDetails["errorMessage"] = "username";
  //       this.myRef.current.focus();
  //     }  else {
  //       newStateDetails["errorMessage"] = "'password";
  //       this.passRef.current.focus();
  //     }
  //     this.setState((this.state = newStateDetails));

      
  //     }
    

  // }

  // clickToggler = () => {
  //   let newState = {...this.state};
  //   newState["'stateDetails"] = false;
  //   this.setState((this.state = newState));
  // }
 

  render (props){
    
   
    return (
      
      <Router>

        <div >

          
           <div className="App">
             <Link to="/login">Login</Link>
           </div>
           <Switch>
             <Route path="/login">
               <Test />
             </Route>
           </Switch>
       </div>

        {/* <React.Fragment>
           <div className = "App">
              <Username 
               reference ={this.myRef}
               changeName ={this.changeName}
               clicked={this.clickToggler}
               name={this.state.Username} />
              <Password 
               reference = {this.passRef}
               changePassword= {this.changePassword}
               clicked={this.clickToggler}
               pass={this.state.Password} />
              <Login validate = {this.validation} />
              
              <Content />

                {this.state.stateDetails ? (
                <Error message = {this.state.errorMessage} />
              ) : null}
                
            </div>
          

        </React.Fragment> */}
      </Router>
    )
  }
}

export default App;
