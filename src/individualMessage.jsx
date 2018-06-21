import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class IndividualItem extends Component {

    state = {
        message: ""
    }

    componentDidMount() {
        fetch(`https://kwitter-api.herokuapp.com/messages/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(({message}) => this.setState(message))
    }

    render() {

        const { messageItem } = this.props;
        return (

            <React.Fragment>
                <div>
                    <h1>{this.state.text}</h1>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        messageItem: state.messageItem
    }
}

export default withRouter(connect(mapStateToProps)(IndividualItem));