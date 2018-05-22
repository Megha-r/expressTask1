import React, { Component } from 'react';

class User extends Component {
    
    render() {
        let { match: { params: {username} } } = this.props

        return (
            <div>
                This is User page : {username}
            </div>
        )
    }
}

export default User