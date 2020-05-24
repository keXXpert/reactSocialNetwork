import React from 'react';
import myCSS from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userAvatar from './../../../assets/images/ava.png'

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, postUserAvatar }) => {
    if (!profile) {
        return <Preloader />
    }
    let inputElement = null;

    const handleButtonClick = () => {
        inputElement.click();
    }

    const onFileSelect = (e) => {
        if (e.target.files.length) {
            postUserAvatar(e.target.files[0], profile.userId)
        }
        // console.log(e.target.files[0])
        // console.log(profile)
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
                        <img src={profile.photos.large || userAvatar} alt='' />
                        {isOwner &&
                            <div className={myCSS.middle}>
                                <input ref={input => inputElement = input} type='file' style={{ display: 'none' }} onChange={onFileSelect} />
                                <div onClick={() => { handleButtonClick() }} className={myCSS.text}>Upload Photo</div>
                            </div>
                        }
                    </div>
                    {profile.aboutMe}
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} />
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;