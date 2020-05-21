import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthed: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return { ...state, ...action.data}
         default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuthed) => ({type: SET_USER_DATA, data: {userId, email, login, isAuthed}});

export const getAuth = () => {
    return (dispatch) => {
        return authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true))
                }
            });

    }
}
export const getLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let action = stopSubmit('login', {_error: response.messages.toString()});
                    dispatch(action)
                }
            });

    }
}
export const getLogout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    console.log('Logged out')
                    dispatch(setAuthUserData(null, null, null, false))
                }
            });

    }
}

export default authReducer; 