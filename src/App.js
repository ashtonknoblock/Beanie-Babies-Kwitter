import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './Auth.jsx';
import IndividualItem from './individualMessage.jsx';
import userProfile from './userProfile.jsx';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions';
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
        <ul id='nav'>
            <div id="homeBtn">
            <button className="btn" type="submit"><Link to="/">Home</Link></button>
            </div>
          
            <div id="messagesBtn">
            <button className="btn" type="submit"><Link to="/messages">Messages</Link></button>
            </div>

            <div id="profileBtn">
            <button className="btn" type="submit"><Link to="/profile">Profile</Link></button>
            </div>

            {/* <div id="updatePasswordbtn">
              <button className="btn" type="submit">Update Password</button>
            </div> */}

            <div id="logoutBtn">
            <button className="btn" type="submit" onClick={this.fetchLogout}><Link to="/">Log Out</Link></button>
            </div>
          
        </ul>
       </div> 
        
        <div id="mainstuff">

        <Switch>

          <Route exact path="/" component={Auth}/>
          <Route exact path="/messages" component={MessageList}/>
          <Route path="/messages/:id" component={IndividualItem}/>
          <Route exact path="/profile" component={userProfile}/>


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



