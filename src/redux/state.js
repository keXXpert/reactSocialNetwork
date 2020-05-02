let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hey! How are you?', likes: 5},
                {id: 2, text: 'It\'s my first post', likes: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    
    _callSubscriber() {
        console.log('State updated');
    },
    
    getState() {return this._state},
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                text: this._state.dialogsPage.newMessageText
            }
        
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store=store; // for debugging purposes