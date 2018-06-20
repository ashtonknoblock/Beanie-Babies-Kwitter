import React, { Component } from 'react';


const fetchLogin = () => {
  const postRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Test",
        password: "Testing",
        displayName: "Tester"
      }),
  }

  fetch('http://localhost:3000/auth/register', postRequestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

class Auth extends Component {
    render() {
      return (
        <React.Fragment>
          SIGN UP
            <form method="get" name="RegisteForm" action="/">
              Username:<input type="text" name="username" required></input>
              Password:<input type="password" name="password" required></input>
              Display Name:<input type="text" name="displayName" required></input>
              <input type="submit" value="Submit" onSubmit={fetchLogin()}></input>
            </form>
        </React.Fragment>
      )
    }
  }

  export default Auth;