import React from 'react';
import myCSS from './Navbar.module.css';


const Navbar = () => {
    return <nav className={myCSS.nav}>
        <div className={myCSS.item}>
            <a>Profile</a>
        </div>
        <div className={myCSS.item}>
            <a>Messages</a>
        </div>
        <div className={myCSS.item}>
            <a>News</a>
        </div>
        <div className={myCSS.item}>
            <a>Music</a>
        </div>
    </nav >
}

export default Navbar;