import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI, followAPI } from '../api/api';
import { UsersType } from '../types/types';

// types

export type UsersInitialState = typeof initialState

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type ToggleFetchingActionType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}
type ToggleFollowingActionType = {
    type: typeof TOGGLE_FOLLOWING
    isFollowing: boolean
    userId: number
}

export type UsersActionTypes = FollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleFetchingActionType | ToggleFollowingActionType

// reducer


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


const searchUsersReducer = (state = initialState, action: UsersActionTypes): UsersInitialState => {
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

// action creators
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching: boolean): ToggleFetchingActionType => ({ type: TOGGLE_FETCHING, isFetching });
export const toggleIsFollowing = (isFollowing: boolean, userId: number): ToggleFollowingActionType => ({ type: TOGGLE_FOLLOWING, isFollowing, userId });

//thunk creators
export const getUsers = (currentPage: number, usersOnPage: number): ThunkAction<void, UsersInitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, usersOnPage);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

export const followUser = (userId: number, followed: boolean): ThunkAction<void, UsersInitialState, unknown, Action<string>> => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let response;
    if (followed) {
        response = await followAPI.unFollow(userId);
    }
    else {
        response = await followAPI.follow(userId);
    }
    if (response.resultCode === 0) {
        dispatch(follow(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}

export default searchUsersReducer;