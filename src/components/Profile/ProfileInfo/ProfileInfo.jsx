import React from 'react';
import myCSS from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div className={myCSS.bioBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;