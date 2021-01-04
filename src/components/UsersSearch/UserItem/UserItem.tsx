import React from 'react';
import myCSS from './UserItem.module.css'
import userAvatar from './../../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';

interface UserItemPropTypes {
    id: number
    photos: {
        small: string
        large: string
    }
    isFollowing: Array<number>
    followUser: (id: number, followed: boolean) => void
    followed: boolean
    name: string
    status?: string
}

const UserItem: React.FC<UserItemPropTypes> = ({ id, photos, isFollowing, followUser, followed, name, status }) => {
    return (
        <div key={id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + id}>
                        <img src={photos.small === null ? userAvatar : photos.small} className={myCSS.avatar} alt='User Avatar' />
                    </NavLink>
                </div>
                <div>
                    <button disabled={isFollowing.some(localId => localId === id)} onClick={() => {
                        followUser(id, followed);
                    }}>{followed ? 'Unfollow' : 'Follow'} </button>
                </div>
            </span>
            <span>
                <span>
                    <div>{name}</div>
                    {status && <div>{status}</div>}
                </span>
            </span>
        </div>
    )
}

export default UserItem;