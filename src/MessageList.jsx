import React, { Component } from 'react';
import './reducer.js';
import { connect } from 'react-redux';
import { addMessage } from './actions.js';
import MessageItem from './MessageItem.jsx';




class MessageList extends Component {

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addMessage(this.state.text));
    let inputField = document.getElementById("input");
    inputField.value = "";
  }
    render() {
      const { messages } = this.props;
      return (
        <React.Fragment>

          <header className="header">
            <h1>New Kweet</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                id="input"
                placeholder="What's on your mind?"
                className="new-message"
                onChange={this.handleChange}
                autoFocus
              />
            </form>
          </header>
          <section className="main">
            <ul>
              {messages.map(message => <MessageItem messages={messages} id={message.id} key={message.id} value={message.message.text} />)}
            </ul>
          </section>
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      
        messages: state.messages,
        text: state.text
    }
  }

  export default connect(mapStateToProps)(MessageList);