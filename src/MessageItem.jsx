import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMessages } from './actions.js';

class MessageItem extends Component {

  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/messages")
    .then(response => response.json())
    .then(data => {
      this.props.dispatch(getMessages(data));
     })
  }
    render() {
      const { messageItem, token, key } = this.props;
      console.log(messageItem)
      return (
        <React.Fragment>
          <li>
            <div>
              <p>{messageItem.messages.text}</p>
            </div>
          </li>  
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

  export default withRouter(connect(mapStateToProps)(MessageItem));