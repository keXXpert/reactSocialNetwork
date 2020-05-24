import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_STATUS = 'profile/SET-STATUS';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_AVATAR_PROFILE = 'profile/SET-AVATAR';

let initialState = {
    profile: null,
    posts: [
        { id: 1, text: 'Hey! How are you?', likes: 5 },
        { id: 2, text: 'It\'s my first post', likes: 20 }
    ],
    status: 'Hello World!'
}

const profileReducer = (state = initialState, action) => {
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
                profile: {...state.profile, photos: action.photoURL}
            };
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const addNewPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setPhoto = (photoURL) => ({ type: SET_AVATAR_PROFILE, photoURL });

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    // if (data.resultCode === 0) {
        dispatch(setUserProfile(data));
    // }
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    // if (data.resultCode === 0) {
        dispatch(setUserStatus(data));
    // }
}

export const postUserAvatar = (file) => async (dispatch) => {
    let data = await profileAPI.setAvatar(file)
    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }

}

export default profileReducer;