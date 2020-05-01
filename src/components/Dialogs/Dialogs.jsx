import React from 'react';
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map ( el => (<DialogItem name={el.name} id={el.id} />))
    let messagesElements = props.dialogsPage.messages.map (el => (<Message message={el.text} />))

    let newMessageElement = React.createRef();
    
    const newMessageUpdate = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
     
    const sendMessage = () => {
        // let text = newMessageElement.current.value;
        // alert(text);
        props.sendMessage(props);
    }

    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                {dialogsElements}
            </div>
            <div className={myCSS.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={newMessageUpdate}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Dialogs;