import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMessage } from './actions'

class ProfileItem extends Component {

    fetchDelete = (e) => {
        e.preventDefault();
        console.log(this.props.index)
        fetch(`https://kwitter-api.herokuapp.com/messages/${this.props.index}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.props.token.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(this.props.dispatch(deleteMessage(this.props.index)))
}
    
    
    render() {
       
        return(
            <React.Fragment>
                <li>
                  <div id="profileItem">
                   
                    
                    <label>{this.props.value}</label>
                    <button onClick={this.fetchDelete} id={this.props.index} className="profileBtn" type="submit"><Link to="/profile">Delete Message</Link></button>

                  </div>
                </li>
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

export default withRouter(connect(mapStateToProps)(ProfileItem));