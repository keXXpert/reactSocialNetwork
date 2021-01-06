import React from 'react';
import myCSS from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { HeaderHOCPropsType } from './HeaderContainer';

const Header: React.FC<HeaderHOCPropsType> = ({ auth: { login, isAuthed }, getLogout }) => {
    return <header className={myCSS.header}>
        <img src='https://dynamic.brandcrowd.com/asset/logo/523ee409-81f7-4d7a-900d-81e1e2473a2b/logo?v=4' alt='Social Network Logo' />
        <div className={myCSS.loginBlock}>
            {isAuthed
                ? <div> <strong>{login}</strong><p><button onClick={getLogout}>Log Out</button></p></div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}

export default Header;