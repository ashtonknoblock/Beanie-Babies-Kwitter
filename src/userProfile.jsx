import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileItem from './profileItem.jsx';



class userProfile extends Component {


    state = {
        userInfo: ""
    }
    
    componentWillMount() {
        fetch("https://kwitter-api.herokuapp.com/users", {
            headers: {
                "Authorization": `Bearer ${this.props.token.token}`
            }
        })
          .then(response => response.json())
          

          .then(({user}) => {
              this.setState(user)
              
            }
            )
          
    }


    render() {
        
        return (
            <React.Fragment>
                <h1>{this.state.displayName}</h1>
                
                {/* {this.state.messages && <h1>{this.state.messages[0].text}</h1>} */}


                <ul>
                {this.state.messages && this.state.messages.map((message, i) => <ProfileItem messages={this.state.messages} key={i} index={i} id={message.id} /> )}
                </ul>
            </React.Fragment> 





        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default withRouter(connect(mapStateToProps)(userProfile));