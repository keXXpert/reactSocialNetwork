const dialogsReducer = (state, action) => {
    if (action.type === 'SEND-MESSAGE') {
        let newMessage = {
            id: state.messages.length + 1,
            text: state.newMessageText
        }
    
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.text;
    }
    return state;
}

export default dialogsReducer;