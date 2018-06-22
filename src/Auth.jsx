import React, { Component } from 'react';
import { addUser } from './actions'
import './reducer';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const initialState = {
  
    regUsername: "",
    regPassword: "",
    displayName: "",
    username: "nick",
    password: "password"

 
}

class Auth extends Component {



 state = initialState 

  inputChange = field => evt => {
    this.setState({ 
      [field]: evt.target.value 
    })
  }


  fetchLogin = (e) => {
    e.preventDefault();

    const postRequestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
  }
  
  fetch('https://kwitter-api.herokuapp.com/auth/login', postRequestOptions)
  .then(response => response.json())
  .then(data => {
    this.props.dispatch(addUser(data));
  })
  }





  fetchRegister = (e) => {
    e.preventDefault();


  
    const registerOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.regUsername,
        password: this.state.regPassword,
        displayName: this.state.displayName
      }),
  }
  
    fetch('https://kwitter-api.herokuapp.com/auth/register', registerOptions)
    
    .then(data => {
      this.setState(initialState)
    })
    
  }

    render() {
      return (
        <React.Fragment>
         <div id="registerForm"> 
            <form onSubmit={this.fetchRegister} action="/">
            <legend>Register:</legend>
              Username:<input className="reg" value={this.state.regUsername} onChange={this.inputChange("regUsername")} required></input>
              Password:<input className="reg" type="password" value={this.state.regPassword} onChange={this.inputChange("regPassword")} required></input>
              Display Name:<input className="reg" value={this.state.displayName} onChange={this.inputChange("displayName")} required></input>
              <button type="submit">Register</button>
            </form>
          </div>
          <div id="loginForm">
            <form>
            <legend>Sign In:</legend>
              Username:<input className="log" value={this.state.username} onChange={this.inputChange("username")} required></input>
              Password:<input className="log" type="password" value={this.state.password} onChange={this.inputChange("password")} required></input>
              <input type="hidden" name="redirect" value="www.google.com"></input>
              <button type="submit" onClick={this.fetchLogin}><Link to="/messages">Sign In</Link></button>
            </form>
          </div>
        </React.Fragment>       
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      
        username: state.username,
        password: state.password,
        displayName: state.displayName
    }
  }

  export default withRouter(connect(mapStateToProps)(Auth));

 