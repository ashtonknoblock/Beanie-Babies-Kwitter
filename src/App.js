import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './Auth.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kwitter</h1>
         </header>
       </div>

        <Switch>

          <Route 
            path="/"
            render={props => <Auth {...props} />} />
          <Route 
            path="/messages"
            render={props => <MessageList {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
