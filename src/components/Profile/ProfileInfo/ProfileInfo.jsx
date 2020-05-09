import React from 'react';
import myCSS from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    debugger;
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div className={myCSS.bioBlock}>
                <img src={props.profile.photos.large} />
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;