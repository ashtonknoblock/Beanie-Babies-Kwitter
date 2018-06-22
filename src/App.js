import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './Auth.jsx';
import IndividualItem from './individualMessage.jsx';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import { logout } from './actions.js';
class App extends Component {

  fetchLogout = (e) => {
    this.props.dispatch(logout())

  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Kwitter</h1>
         </header>
       </div>
       <div id="nav">
        <ul>
            <div id="homeBtn">
            <button type="submit"><Link to="/">Home</Link></button>
            </div>
          
            <div id="messagesBtn">
            <button type="submit"><Link to="/messages">Messages</Link></button>
            </div>

            <div id="profileBtn">
            <button type="submit"><Link to="/messages">Profile</Link></button>
            </div>

            <div id="logoutBtn">
            <button type="submit" onClick={this.fetchLogout}><Link to="/">Log Out</Link></button>
            </div>
          
        </ul>
       </div> 
        
        <div id="mainstuff">

        <Switch>

          <Route exact path="/" component={Auth}/>
          <Route exact path="/messages" component={MessageList}/>
          <Route path="/messages/:id" component={IndividualItem}/>

        </Switch>
        </div>

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



