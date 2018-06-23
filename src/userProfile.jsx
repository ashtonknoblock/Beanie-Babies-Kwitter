import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileItem from './profileItem.jsx';
import { userAction, userMessage, updatePassword } from './actions'


class userProfile extends Component {

    state = {
        text: ""
    }

    textInputChange = field => evt => {
        this.setState({
            [field]: evt.target.value
        })
    }

    updatePassword = (e) => {
        e.preventDefault();

        const patchMessageOptions = {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.token.token}`
            },
            body: JSON.stringify({ password: this.state.text })
        }

        fetch("https://kwitter-api.herokuapp.com/users", patchMessageOptions)
        .then(response => response.json())
        .then(data => {
            this.props.dispatch(updatePassword(this.state.text))
        })
        // .then(data => console.log(data))

    }
    
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

                <form>
                  <input onChange={this.textInputChange("text")}>
                  
                  </input>

                  <div id="updatePasswordbtn">
                    <button onClick={this.updatePassword} className="btn" type="submit">Update Password</button>
                  </div>

                </form>


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