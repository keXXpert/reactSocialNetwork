import React from 'react';
import myCSS from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <main className={myCSS.profile}>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        <div>
            avatar + description
        </div>
        <MyPosts />
    </main>
}

export default Profile;