import React from 'react';
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map ( el => (<DialogItem name={el.name} id={el.id} />))
    let messagesElements = props.messages.map (el => (<Message message={el.text} />))
    
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