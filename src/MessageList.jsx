import React, { Component } from 'react';
import './reducer';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { getMessages } from './actions'
import MessageItem from './MessageItem.jsx';




class MessageList extends Component {

  state = {
    text: ""
  }

  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/messages")
      .then(response => response.json())
      .then(data => {
        this.props.dispatch(getMessages(data));
      })
  }



  textInputChange = field => evt => {
    this.setState({
      [field]: evt.target.value
    })

  }


  handleSubmitFetch = e => {
    e.preventDefault();

    const postMessageOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.props.token.token}`
      },
      body: JSON.stringify({ text: this.state.text })
    }

    fetch('https://kwitter-api.herokuapp.com/messages', postMessageOptions)
      .then(data => console.log(data))
      .then(data => {
        this.setState({
          text: ""
        })
      })

  }


  render() {

    const { messageItem } = this.props;
    // console.log(token);
    return (
      <React.Fragment>

        <header className="header">
          
          <h1>New Kweet</h1>
          
          <form>
            <input
              id="input"
              value={this.state.text}
              placeholder="What's on your mind?"
              className="new-message"
              onChange={this.textInputChange("text")}
              autoFocus
            />
            
            <button type="submit" onClick={this.handleSubmitFetch}><Link to="/messages">Post Kweet</Link></button>

          </form>

        </header>
          
        <section className="main">
          <ul>
            {messageItem.messages.map((message, i) => <MessageItem key={i} index={i} id={message.id} />)}
          </ul>
        </section>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    messageItem: state.messageItem,
    token: state.token

  }
}


export default withRouter(connect(mapStateToProps)(MessageList));