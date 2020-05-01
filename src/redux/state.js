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

    getState() {return this._state},

    _callSubscriber() {
        console.log('State updated');
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            text: this._state.profilePage.newPostText,
            likes: 0
        }
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    
    sendMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            text: this._state.dialogsPage.newMessageText
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text;
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store=store; // for debugging purposes

// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, text: 'Hey! How are you?', likes: 5},
//             {id: 2, text: 'It\'s my first post', likes: 20}
//         ],
//         newPostText: '',
//         addPost: (obj) => {
//             let newPost = {
//                 id: obj.posts.length + 1,
//                 text: obj.newPostText,
//                 likes: 0
//             }
        
//             obj.posts.push(newPost);
//             state.profilePage.newPostText = '';
//             rerenderEntireTree(state);
//         },
//         updateNewPostText: (text) => {
//             state.profilePage.newPostText = text;
//             rerenderEntireTree(state);
//         }
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Alex'},
//             {id: 2, name: 'Matt'},
//             {id: 3, name: 'Erica'},
//             {id: 4, name: 'Beck'},
//             {id: 5, name: 'Kate'}
//         ],
//         messages: [
//             {id: 1, text: 'Hey!'},
//             {id: 2, text: 'How are you?'},
//             {id: 3, text: 'Yo! My friend!'}
//         ],
//         newMessageText: '',
//         sendMessage: (obj) => {
//             let newMessage = {
//                 id: obj.messages.length + 1,
//                 text: obj.newMessageText,
//             }
        
//             obj.messages.push(newMessage);
//             state.dialogsPage.newMessageText = '';
//             rerenderEntireTree(state);
//         },
//         updateNewMessageText: (text) => {
//             state.dialogsPage.newMessageText = text;
//             rerenderEntireTree(state);
//         }
//     },
// }