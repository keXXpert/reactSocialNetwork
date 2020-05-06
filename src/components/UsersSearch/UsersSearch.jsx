import React from 'react';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

const UsersSearch = (props) => {
    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items));
    }

    return (
        <main>
            {props.users.map(el => (<UserItem {...el} followUser={props.followUser} />))}
        </main>
    )
}

export default UsersSearch;