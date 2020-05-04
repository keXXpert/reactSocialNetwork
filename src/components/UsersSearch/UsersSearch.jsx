import React from 'react';
import UserItem from './UserItem/UserItem';

const UsersSearch = (props) => {
    return (
        <main>
            {props.users.map( el => (<UserItem {...el} followUser={props.followUser} />))}
        </main>
    )
}

export default UsersSearch;