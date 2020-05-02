const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likes: 0
            }
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;