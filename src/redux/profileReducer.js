let initialState = {
    posts: [
        {id: 1, text: 'Hey! How are you?', likes: 5},
        {id: 2, text: 'It\'s my first post', likes: 20}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;