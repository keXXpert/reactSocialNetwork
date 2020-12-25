import React from 'react';
// import myCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return <main>
        <ProfileInfo {...props} />
        {props.isOwner ? <MyPostsContainer />:null}
    </main>
}

export default Profile;