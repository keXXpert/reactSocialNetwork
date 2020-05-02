import React from 'react';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const newMessageUpdate = (text) => {
        let action = {
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            text: text
        }
        props.dispatch(action);
    }
     
    const sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }

    return (
        <Dialogs 
            sendMessage={sendMessage}
            newMessageUpdate={newMessageUpdate}
            dialogsPage={props.dialogsPage}
        />
    )
}

export default DialogsContainer;