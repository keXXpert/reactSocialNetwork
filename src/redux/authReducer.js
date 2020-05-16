import { authAPI } from '../api/api';

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
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true))
                }
            });

    }
}
export const getLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        debugger;
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    console.log('Logged in, UID: '+ response.data.userId)
                    dispatch(getAuth())
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