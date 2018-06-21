import React, { Component } from 'react';
import { addUser } from './actions.js'
import './reducer.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Auth extends Component {

 state = {
    username: "",
    password: "",
    displayName: ""
 }

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
    console.log(data)
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
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.displayName
      }),
  }
  
    fetch('https://kwitter-api.herokuapp.com/auth/register', registerOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
    })
  }

    render() {
      return (
        <React.Fragment>
         <div> 
          REGISTER
            <form onSubmit={this.fetchRegister} action="/">
              Username:<input value={this.state.username} onChange={this.inputChange("username")} required></input>
              Password:<input type="password" value={this.state.password} onChange={this.inputChange("password")} required></input>
              Display Name:<input value={this.state.displayName} onChange={this.inputChange("displayName")} required></input>
              <button type="submit">Register</button>
            </form>
          </div>
          <div>
            SIGN IN
            <form onSubmit={this.fetchLogin}>
              Username:<input value={this.state.username} onChange={this.inputChange("username")} required></input>
              Password:<input type="password" value={this.state.password} onChange={this.inputChange("password")} required></input>
              <input type="hidden" name="redirect" value="www.google.com"></input>
              <button type="submit">Sign In</button>
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

  // export default Auth;