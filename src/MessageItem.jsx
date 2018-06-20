import React, { Component } from 'react';

class MessageItem extends Component {
    render() {
      return (
        <React.Fragment>
          <li>
            <div>
            <label>{this.props.value}</label>
            </div>
          </li>  
        </React.Fragment>
      )
    }
  }

  export default MessageItem;