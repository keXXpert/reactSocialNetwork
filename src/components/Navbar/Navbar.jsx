import React from 'react';
import myCSS from './Navbar.module.css';


const Navbar = (props) => {
    return <nav className={myCSS.nav}>
        <div className={myCSS.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={myCSS.item}>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className={myCSS.item}>
            <a href='/news'>News</a>
        </div>
        <div className={myCSS.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={myCSS.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav >
}

export default Navbar;