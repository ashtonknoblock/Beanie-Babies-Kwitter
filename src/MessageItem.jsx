import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getMessages } from './actions.js';

class MessageItem extends Component {

  // componentDidMount() {
  //   fetch("https://kwitter-api.herokuapp.com/messages")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.props.dispatch(getMessages(data));
  //    })
  // }


    render() {
      const { messageItem, index, id } = this.props;
      return (
        <React.Fragment>
          
            <div>
              
              <p><Link to={`/messages/${id}`}>{id + " -- " + messageItem.messages[index].text}</Link></p>
              
            </div>
            
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