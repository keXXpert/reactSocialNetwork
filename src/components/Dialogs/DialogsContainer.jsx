// import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     const newMessageUpdate = (text) => {
//         let action = {
//             type: 'UPDATE-NEW-MESSAGE-TEXT',
//             text: text
//         }
//         props.dispatch(action);
//     }
     
//     const sendMessage = () => {
//         props.dispatch({type: 'SEND-MESSAGE'});
//     }

//     return (
//         <Dialogs 
//             sendMessage={sendMessage}
//             newMessageUpdate={newMessageUpdate}
//             dialogsPage={props.dialogsPage}
//         />
//     )
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageUpdate: (text) => {
            let action = {
                type: 'UPDATE-NEW-MESSAGE-TEXT',
                text: text
            }
            dispatch(action);
        },
        sendMessage: () => {
            dispatch({type: 'SEND-MESSAGE'});
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;