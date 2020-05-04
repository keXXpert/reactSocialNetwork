import React from 'react';
import myCSS from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <div key={props.id}>
            <span>
                <div>
                    <img src={props.photoURL} className={myCSS.avatar}/>
                </div>
                <div>
                    <button onClick={props.followUser(props.id)}>{props.followed ? 'Follow': 'Unfollow'} </button>
                </div>
            </span>
            <span>
                <span>
                    <div>{props.fullName}</div>
                    <div>{props.status}</div>
                </span>
                <span>
                    <div>{props.location.city}</div>
                    <div>{props.location.country}</div>
                </span>
            </span>
        </div>
    )
}

export default UserItem;