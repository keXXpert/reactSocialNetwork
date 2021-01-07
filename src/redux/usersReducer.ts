import { ThunkAction } from 'redux-thunk';
import { followAPI } from "../api/endpoints/follow";
import { usersAPI } from "../api/endpoints/users";
import { UsersType } from '../types/types';
import { InferActionTypes } from './redux-store';

export type UsersInitialState = typeof initialState

const FOLLOW = 'users/FOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'users/TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'users/TOGGLE-FOLLOWING';

let initialState = {
    users: [] as Array<UsersType>,
    usersOnPage: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    isFollowing: [] as Array<number>
}


const searchUsersReducer = (state = initialState, action: ActionsTypes): UsersInitialState => {
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
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionTypes<typeof usersActions>

// action creators
export const usersActions = {
    follow: (userId: number) => ({ type: FOLLOW, userId } as const),
    setUsers: (users: Array<UsersType>) => ({ type: SET_USERS, users } as const),
    setCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_FETCHING, isFetching } as const),
    toggleIsFollowing: (isFollowing: boolean, userId: number) => ({ type: TOGGLE_FOLLOWING, isFollowing, userId } as const)
}

//thunk creators
export const getUsers = (currentPage: number, usersOnPage: number): ThunkAction<Promise<void>, UsersInitialState, unknown, ActionsTypes> => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, usersOnPage);
    dispatch(usersActions.toggleIsFetching(false));
    dispatch(usersActions.setUsers(response.items));
    dispatch(usersActions.setTotalUsersCount(response.totalCount));
}

export const followUser = (userId: number, followed: boolean): ThunkAction<Promise<void>, UsersInitialState, unknown, ActionsTypes> => async (dispatch) => {
    dispatch(usersActions.toggleIsFollowing(true, userId));
    let response;
    if (followed) {
        response = await followAPI.unFollow(userId);
    }
    else {
        response = await followAPI.follow(userId);
    }
    if (response.resultCode === 0) {
        dispatch(usersActions.follow(userId));
    }
    dispatch(usersActions.toggleIsFollowing(false, userId));
}

export default searchUsersReducer;