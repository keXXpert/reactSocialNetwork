const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Matt'},
        {id: 3, name: 'Erica'},
        {id: 4, name: 'Beck'},
        {id: 5, name: 'Kate'}
    ],
    messages: [
        {id: 1, text: 'Hey!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo! My friend!'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state;
    }
}

export default dialogsReducer;