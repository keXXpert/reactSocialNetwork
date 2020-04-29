import React from 'react';
import myCSS from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/id' + props.id;

    return (
        <div className={myCSS.dialog + ' ' + myCSS.active}>
            <NavLink to={path} activeClassName={myCSS.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={myCSS.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Matt' id='2' />
                <DialogItem name='Erica' id='3' />
                <DialogItem name='Beck' id='4' /> 
                <DialogItem name='Kate' id='5' />
            </div>
            <div className={myCSS.messages}>
                <Message message='Hey' />
                <Message message='How are you?' />
                <Message message='Yo' />
            </div>
        </main>
    )
}

export default Dialogs;