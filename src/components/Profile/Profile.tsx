import React from 'react';
// import myCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    postUserAvatar: (url: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <main>
        <ProfileInfo {...props} />
        {props.isOwner ? <MyPostsContainer /> : null}
    </main>
}

export default Profile;