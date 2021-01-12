import profileReducer, { addNewPost } from './profileReducer'

let state = {
    profile: null,
    posts: [
        { id: 1, text: 'Hey! How are you?', likes: 5 },
        { id: 2, text: 'It\'s my first post', likes: 20 }
    ],
    status: 'Hello World!'
}


test('posts array length should increment', () => {
    // test data
    let action = addNewPost('New test post')

    // action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts.length).toBe(3)
});

test('new post message should be correct', () => {
    // test data
    let action = addNewPost('New test post')

    // action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts[2].text).toBe('New test post')
});