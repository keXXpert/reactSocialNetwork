import React from 'react';
import myCSS from './UserItem.module.css'
import userAvatar from './../../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';

const UserItem = (props) => {
    return (
        <div key={props.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.photos.small === null ? userAvatar : props.photos.small} className={myCSS.avatar} />
                    </NavLink>
                </div>
                <div>
                    <button onClick={() => {
                        if (props.followed) {
                            followAPI.unFollow(props.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.followUser(props.id);
                                    }
                                });
                        }
                        else {
                            followAPI.follow(props.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.followUser(props.id);
                                    }
                                });
                        }
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