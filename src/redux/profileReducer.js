const profileReducer = (state, action) => {

    if (action.type === 'ADD-POST') {
        let newPost = {
            id: state.posts.length + 1,
            text: state.newPostText,
            likes: 0
        }
    
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.text;
    }

    return state;
}

export default profileReducer;