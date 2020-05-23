import React from 'react';
import myCSS from './UserItem.module.css'
import userAvatar from './../../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
    return (
        <div key={props.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.photos.small === null ? userAvatar : props.photos.small} className={myCSS.avatar} alt='User Avatar' />
                    </NavLink>
                </div>
                <div>
                    <button disabled={props.isFollowing.some( id => id === props.id)} onClick={() => {
                        props.followUser(props.id, props.followed);
                    }}>{props.followed ? 'Unfollow' : 'Follow'} </button>
                </div>
            </span>
            <span>
                <span>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </span>
            </span>
        </div>
    )
}

export default UserItem;