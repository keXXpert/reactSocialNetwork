import React from 'react';
import myCSS from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userAvatar from './../../../assets/images/ava.png'

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' className={myCSS.headerImage} alt=''></img>
            </div>
            <div className={myCSS.profileWrapper}>
                <div className={myCSS.profileBlock}>
                    <p>Name: <span className={myCSS.textValue}>{profile.fullName}</span></p>
                    <p>Looking for a job? <span className={myCSS.textValue}>{profile.lookingForAJob ? 'Yes' : 'No'}</span></p>
                    <p>Job title: <span className={myCSS.textValue}>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No'}</span></p>
                    <p></p>

                </div>
                <div className={myCSS.bioBlock}>
                    <div className={myCSS.profilePhoto}>
                        <img src={profile.photos.large ? profile.photos.large : userAvatar} alt='' />
                        <div className={myCSS.middle}>
                            <div className={myCSS.text}>Upload Photo</div>
                        </div>
                    </div>
                    {profile.aboutMe}
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;