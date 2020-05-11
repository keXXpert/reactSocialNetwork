import React from 'react';
import myCSS from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' className={myCSS.headerImage}></img>
            </div>
            <div className={myCSS.profileWrapper}>
                <div className={myCSS.profileBlock}>
                    <p>Name: <span className={myCSS.textValue}>{props.profile.fullName}</span></p>
                    <p>Looking for a job? <span className={myCSS.textValue}>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></p>
                    <p>Job title: <span className={myCSS.textValue}>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'No'}</span></p>
                    <p></p>
                    
                </div>
                <div className={myCSS.bioBlock}>
                    <div className={myCSS.profilePhoto}>
                        <img src={props.profile.photos.large} />
                    </div>
                    {props.profile.aboutMe}
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;