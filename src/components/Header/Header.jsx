import React from 'react';
import myCSS from './Header.module.css';

const Header = () => {
    return <header className={myCSS.header}>
        <img src='https://dynamic.brandcrowd.com/asset/logo/523ee409-81f7-4d7a-900d-81e1e2473a2b/logo?v=4'></img>
    </header>
}

export default Header;