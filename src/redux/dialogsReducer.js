const dialogsReducer = (state, action) => {
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