const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Hey! How are you?', likes: 5},
        {id: 2, text: 'It\'s my first post', likes: 20}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: stateCopy.posts.length + 1,
                text: stateCopy.newPostText,
                likes: 0
            }
            stateCopy.posts=[...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.text;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default profileReducer;