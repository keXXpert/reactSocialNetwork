import React from 'react';
import myCSS from './UserItem.module.css'
import userAvatar from './../../../assets/images/ava.png'

const UserItem = (props) => {
    return (
        <div key={props.id}>
            <span>
                <div>
                    <img src={props.photos.small === null ? userAvatar : props.photos.small} className={myCSS.avatar}/>
                </div>
                <div>
                    <button onClick={() => {props.followUser(props.id)}}>{props.followed ? 'Unfollow': 'Follow'} </button>
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