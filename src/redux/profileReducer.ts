import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { PhotosType, ProfileType, RootProfileType } from "../types/types";

// types

export type ProfileInitialState = typeof initialState

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetAvatarUrlActionType = {
    type: typeof SET_AVATAR_PROFILE
    photoURL: PhotosType
}

export type ProfileActionTypes = AddPostActionType | SetStatusActionType | SetUserProfileActionType | SetAvatarUrlActionType

// reducer

const ADD_POST = 'profile/ADD-POST';
const SET_STATUS = 'profile/SET-STATUS';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_AVATAR_PROFILE = 'profile/SET-AVATAR';

let initialState = {
    profile: null as ProfileType | null,
    posts: [
        { id: 1, text: 'Hey! How are you?', likes: 5 },
        { id: 2, text: 'It\'s my first post', likes: 20 }
    ],
    status: 'Hello World!'
}

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileInitialState => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_AVATAR_PROFILE:
            return {
                ...state,
                profile: { ...state.profile as ProfileType, photos: action.photoURL }
            };
        default:
            return state;
    }
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
export const addNewPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
export const setPhoto = (photoURL: PhotosType): SetAvatarUrlActionType => ({ type: SET_AVATAR_PROFILE, photoURL });

export const getUserProfile = (userId: number): ThunkAction<Promise<any>, ProfileInitialState, unknown, ProfileActionTypes> => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    // if (data.resultCode === 0) {
    dispatch(setUserProfile(data));
    // }
}

export const getUserStatus = (userId: number): ThunkAction<Promise<any>, ProfileInitialState, unknown, ProfileActionTypes> => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    // if (data.resultCode === 0) {
    dispatch(setUserStatus(data));
    // }
}

export const postUserAvatar = (file: string): ThunkAction<Promise<any>, ProfileInitialState, unknown, ProfileActionTypes> => async (dispatch) => {
    try {
        let data = await profileAPI.setAvatar(file)
        if (data.resultCode === 0) {
            dispatch(setPhoto(data.data.photos));
        }
    }
    catch (err) {
        console.log(err);
    }
}

// FIXME Promise<any>
export const saveProfile = (profile: RootProfileType): ThunkAction<Promise<any>, ProfileInitialState, unknown, Action<string>> => async (dispatch) => {
    let data = await profileAPI.setProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(profile.userId));
    } else {
        let message = data.messages[0];
        if (message.includes('Contacts')) {
            let errorField = message.split('>')[1].slice(0, -1).toLowerCase()
            dispatch(stopSubmit('profile', { contacts: { [errorField]: message } }));
        } else {
            dispatch(stopSubmit('profile', { _error: message }));
        }
        return Promise.reject(message)
    }
}

export const updateUserStatus = (status: string): ThunkAction<Promise<void>, ProfileInitialState, unknown, ProfileActionTypes> => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }

}

export default profileReducer;