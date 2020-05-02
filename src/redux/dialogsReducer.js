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
        case 'SEND-MESSAGE':
            let newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;