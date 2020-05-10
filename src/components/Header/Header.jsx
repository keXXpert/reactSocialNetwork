import React from 'react';
import myCSS from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={myCSS.header}>
        <img src='https://dynamic.brandcrowd.com/asset/logo/523ee409-81f7-4d7a-900d-81e1e2473a2b/logo?v=4'></img>
        <div className={myCSS.loginBlock}>
            {props.auth.isAuthed ? props.auth.login : <NavLink to='/login'>Login</NavLink>}
            
        </div>
    </header>
}

export default Header;