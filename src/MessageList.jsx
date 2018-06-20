import React, { Component } from 'react';
import './reducer.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { addMessage } from './actions.js'




class MessageList extends Component {

  state = {
    text: ""
  }

  textInputChange = field => evt => {
    this.setState({
      [field]: evt.target.value
    })
  }


  handleSubmitFetch = (e) => {
    e.preventDefault();
    
    let inputField = document.getElementById("input");
    this.props.dispatch(addMessage(inputField.value))
    console.log(this.props.token);

    const postMessageOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.props.token
      },
      body: JSON.stringify({
        text: this.props.text
      })
  }

      fetch('https://kwitter-api.herokuapp.com/messages', postMessageOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })

    }
    
  
    render() {
      // const { messages } = this.props;
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
        text: state.text
    }
  }

  export default withRouter(connect(mapStateToProps)(MessageList));