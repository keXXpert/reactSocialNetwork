import React from 'react';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

class UsersSearch extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => this.props.setUsers(response.data.items));
        }
    }

    render() {
        return (<main>
            <button onClick={this.getUsers}>Get Users</button>
            {this.props.users.map(el => (<UserItem {...el} followUser={this.props.followUser} />))}
        </main>
        )
    }
}

export default UsersSearch;