import React, {useState} from 'react';
import myCSS from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userAvatar from './../../../assets/images/ava.png'
import ProfileBlockForm from './ProfileBlockForm/ProfileBlockForm';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, postUserAvatar, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);
    
    if (!profile) {return <Preloader />}

    let inputElement = null;
    
    const handleButtonClick = () => {
        inputElement.click();
    }

    const onFileSelect = (e) => {
        if (e.target.files.length) {
            postUserAvatar(e.target.files[0], profile.userId)
        }
    }

    const onSubmit = (formData) => {
        debugger;
        formData.userId = profile.userId
        formData.contacts = {}
        saveProfile(formData)
    }

    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' className={myCSS.headerImage} alt=''></img>
            </div>
            <div className={myCSS.profileWrapper}>
                {editMode 
                ? <ProfileBlockForm profile={profile} onSubmit={onSubmit} /> 
                : <ProfileBlock profile={profile} isOwner={isOwner} setEditMode={setEditMode} />}
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

const ProfileBlock = ({profile: {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}, isOwner, setEditMode}) => {
    return (
        
    <div className={myCSS.profileBlock}>
        {isOwner && <div><button onClick={()=> setEditMode(true)}>Edit profile</button></div>}
        <p>Name: <span className={myCSS.textValue}>{fullName}</span></p>
        <p>About me: <span className={myCSS.textValue}>{aboutMe ? aboutMe : '---'}</span></p>
        <p>Looking for a job? <span className={myCSS.textValue}>{lookingForAJob ? 'Yes' : 'No'}</span></p>
        {lookingForAJobDescription && <p>Job title: <span className={myCSS.textValue}>{lookingForAJobDescription ? lookingForAJobDescription : 'No'}</span></p>}
        <p>Contacts:</p> {Object.keys(contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactText={contacts[key]} />
        })}
    </div>
)}



const Contact = ({ contactTitle, contactText }) => {
    return (<p className={myCSS.contact}>{contactTitle}:<span className={myCSS.textValue}>{contactText}</span></p>)
}

export default ProfileInfo;