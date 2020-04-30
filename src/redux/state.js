let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hey! How are you?', likes: 5},
            {id: 2, text: 'It\'s my first post', likes: 20}
        ]
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
        ]
    },
}

export const addPost = (postMessage) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        text: postMessage,
        likes: 0
    }

    state.profilePage.posts.push(newPost);
}

export default state;
  
 