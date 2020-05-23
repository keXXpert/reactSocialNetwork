import React from 'react';
import myCSS from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({id, name}) => {
    let path = '/dialogs/id' + id;
  
    return (
        <div className={myCSS.dialog + ' ' + myCSS.active}>
            <NavLink to={path} activeClassName={myCSS.active}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;