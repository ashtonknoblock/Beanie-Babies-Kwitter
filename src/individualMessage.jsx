import React, { Component } from 'react';


class IndividualItem extends Component {

    state = {
        response: ""
    }

    componentDidMount() {
        fetch(`https://kwitter-api.herokuapp.com/messages/${this.props.match.params.id}`)
        .then(response => response.json())
        .then( ({message}) => this.setState(message))
    }

    render() {

        // const { messageItem } = this.props;
        return (

            <React.Fragment>
                <div>
                    <h1>{this.state.text}</h1>

                    
                </div>
            </React.Fragment>

        )
    }
}

export default IndividualItem;

