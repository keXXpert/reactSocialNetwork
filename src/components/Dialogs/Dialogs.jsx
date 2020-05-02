import React from 'react';
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map ( el => (<DialogItem name={el.name} id={el.id} />))
    let messagesElements = props.dialogsPage.messages.map (el => (<Message message={el.text} />))

    const newMessageUpdate = (e) => {
        let text = e.target.value;
        props.newMessageUpdate(text);
        // let action = {
        //     type: 'UPDATE-NEW-MESSAGE-TEXT',
        //     text: text
        // }
        // props.dispatch(action);
    }
     
    const sendMessage = () => {
        props.sendMessage();
        // props.dispatch({type: 'SEND-MESSAGE'});
    }

    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                {dialogsElements}
            </div>
            <div className={myCSS.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.dialogsPage.newMessageText} onChange={newMessageUpdate}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Dialogs;