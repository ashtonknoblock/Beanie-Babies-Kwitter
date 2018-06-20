import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './Auth.jsx';
// import { addMessage } from './actions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import reducer from './reducer.js';

class App extends Component {

  // handleChange = (e) => {
  //   this.setState({ text: e.target.value })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.dispatch(addMessage(this.state.text));
  //   let inputField = document.getElementById("input");
  //   inputField.value = "";
  // }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kwitter</h1>
         </header>
       </div>

       <ul>
         <li>
           <Link to="/">Root</Link>
         </li>
         <li>
           <Link to="/messages">Messages</Link>
        </li>
       </ul>

        <Switch>

          <Route 
            exact path="/"
            render={props => <Auth {...props} />} />
          <Route 
            path="/messages"
            render={props => <MessageList {...props} />} />
        </Switch>

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    text: state.text
  }
}

export default withRouter(connect(mapStateToProps)(App));

// export default App;
