import React, { Component } from 'react';
import './reducer.js';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { logout } from './actions.js'




class MessageList extends Component {

  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/messages")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  state = {
    text: ""
  }

  textInputChange = field => evt => {
    this.setState({
      [field]: evt.target.value
    })
  }


  handleSubmitFetch = e => {
    e.preventDefault();



    console.log(this.state.text);
    console.log(this.props.token);
    

    const postMessageOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.props.token
      },
      // credentials: "same-origin",
      body: JSON.stringify({text: this.state.text})
  }

      fetch('https://kwitter-api.herokuapp.com/messages', postMessageOptions)
        .then(response => console.log(response))
        

    }

    fetchLogout = (e) => {
      this.props.dispatch(logout())
      
    }
    
  
    render() {
      
      return (
        <React.Fragment>

          <header className="header">
            <h1>New Kweet</h1>
            <form onSubmit={this.handleSubmitFetch}>
              <input
                id="input"
                placeholder="What's on your mind?"
                className="new-message"
                onChange={this.textInputChange("text")}
                autoFocus
              />
            </form>
            <button type="submit" onClick={this.fetchLogout}><Link to="/">Log Out</Link></button>
          </header>
          <section className="main">
            <ul>
              {/* {messages.map(message => <MessageItem messages={messages} id={message.id} key={message.id} value={message.text} />)} */}
            </ul>
          </section>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      
        token: state.token,
       
    }
  }
  

  export default withRouter(connect(mapStateToProps)(MessageList));