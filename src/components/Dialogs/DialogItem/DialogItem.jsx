import React from 'react';
import myCSS from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/id' + props.id;
  
    return (
        <div className={myCSS.dialog + ' ' + myCSS.active}>
            <NavLink to={path} activeClassName={myCSS.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;