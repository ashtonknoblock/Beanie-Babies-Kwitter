import React, { Component } from 'react';

class ProfileItem extends Component {
    render() {
        return(
            <React.Fragment>
                <div id="profileItem">
                    {/* <p>{this.props.messages[this.props.id].text}</p> */}
                    <p>{this.props.messages[this.props.index].text}</p>
                    <button id="profileBtn" type="submit">Delete Message</button>
                </div>
            </React.Fragment>
        )
    }
}

export default ProfileItem;