import React from 'react';
import myCSS from './UserItem.module.css'
import userAvatar from './../../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                        axios
                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '41c79253-06c7-4611-bc44-c850884ebbed'
                            }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.followUser(props.id);
                            }
                        });
                        }
                        else {
                        axios
                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {} , {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '41c79253-06c7-4611-bc44-c850884ebbed'
                            }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
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
                <span>
                    <div>{"props.location.city"}</div>
                    <div>{"props.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default UserItem;