const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                text: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;