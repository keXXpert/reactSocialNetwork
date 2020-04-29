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
    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Matt'},
        {id: 3, name: 'Erica'},
        {id: 4, name: 'Beck'},
        {id: 5, name: 'Kate'}
    ]

    let dialogsElements = dialogsData.map ( el => (<DialogItem name={el.name} id={el.id} />))

    let messagesData = [
        {id: 1, text: 'Hey!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo!'}
    ]

    let messagesElements = messagesData.map (el => (<Message message={el.text} />))
    
    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                {dialogsElements}
            </div>
            <div className={myCSS.messages}>
                {messagesElements}
            </div>
        </main>
    )
}

export default Dialogs;