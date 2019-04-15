import React, { Component } from 'react';

class UsersList extends Component {
    render() {
        const users = this.props.users;
        const onRemove = this.props.onRemove

        return (
            <ul>
                {users.map(user =>
                    
                        <li key={user.id} onClick={() => onRemove(user.id)}>{user.name}</li>
                    
                )}
            </ul>
        )
    }
}

export default UsersList;