import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import Auth from './Auth.jsx';
import IndividualItem from './individualMessage.jsx';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

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

          <Route exact path="/" component={Auth}/>
          <Route exact path="/messages" component={MessageList}/>
          <Route path="/messages/:id" component={IndividualItem}/>

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
