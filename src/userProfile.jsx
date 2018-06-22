import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileItem from './profileItem.jsx';
import { userAction, userMessage } from './actions'


class userProfile extends Component {
    
    componentDidMount() {
        fetch("https://kwitter-api.herokuapp.com/users", {
            headers: {
                "Authorization": `Bearer ${this.props.token.token}`
            }
        })
          .then(response => response.json())
          .then( data => {
              this.props.dispatch(userAction(data.user.displayName))
              this.props.dispatch(userMessage(data.user.messages))
          })
    }


    render() {
        
        return (
            <React.Fragment>
                <h1>{this.props.displayName}</h1>

                <ul>
                    {this.props.messages.map((message, i) => <ProfileItem key={i} index={i} value={this.props.messages[i].text}/> )}
                </ul>
            </React.Fragment> 

        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        displayName: state.displayName,
        messages: state.messages
        
    }
}

export default withRouter(connect(mapStateToProps)(userProfile));