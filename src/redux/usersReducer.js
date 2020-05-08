const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

let initialState = {
    users: [
        // { id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'Dmitry K.', status: 'I\'m a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Alex L.', status: 'I\'m a boss too', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'Andrew M.', status: 'I\'m a super boss', location: { city: 'Kiev', country: 'Ukraine' } }
    ],
    usersOnPage: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false
}


const searchUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed };
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users} //{...state.users, users: [...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export default searchUsersReducer;