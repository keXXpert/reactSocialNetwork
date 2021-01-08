import usersReducer, { usersActions, UsersInitialState } from './usersReducer'

let state: UsersInitialState

beforeEach(() => {
    state = {
        users: [
            { id: 0, name: 'Kexx', followed: false, photos: null },
            { id: 1, name: 'Alex', followed: false, photos: null },
            { id: 2, name: 'Margaret', followed: true, photos: null },
            { id: 3, name: 'Michael', followed: true, photos: null }
        ],
        usersOnPage: 5,
        totalUsersCount: 19,
        currentPage: 1,
        isFetching: false,
        isFollowing: []
    }
})


test('selected user should become followed', () => {
    // test data
    let action = usersActions.follow(1)

    // action
    let newState = usersReducer(state, action)

    //expectetion
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeTruthy()
})


test('selected user should become unfollowed', () => {
    // test data
    let action = usersActions.follow(3)

    // action
    let newState = usersReducer(state, action)

    //expectetion
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
});

