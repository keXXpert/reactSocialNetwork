import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state);
    }
}

export default store;

window.store=store; // for debugging purposes