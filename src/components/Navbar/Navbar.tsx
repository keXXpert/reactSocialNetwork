import React from 'react';
import myCSS from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return <nav className={myCSS.nav}>
        <div className={myCSS.item}>
            <NavLink to='/profile' activeClassName={myCSS.active}>Profile</NavLink>
        </div>
        <div className={myCSS.item}>
            <NavLink to='/dialogs' activeClassName={myCSS.active}>Messages</NavLink>
        </div>
        <div className={myCSS.item}>
            <NavLink to='/news' activeClassName={myCSS.active}>News</NavLink>
        </div>
        <div className={myCSS.item}>
            <NavLink to='/music' activeClassName={myCSS.active}>Music</NavLink>
        </div>
        <div className={myCSS.item}>
            <NavLink to='/users' activeClassName={myCSS.active}>Users</NavLink>
        </div>
        <div className={myCSS.item}>
            <NavLink to='/settings' activeClassName={myCSS.active}>Settings</NavLink>
        </div>
    </nav >
}

export default Navbar;