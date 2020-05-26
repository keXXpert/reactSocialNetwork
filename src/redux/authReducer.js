import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthed: false,
    captchaURL: null  //if null, captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case SET_CAPTCHA_URL:
            return { ...state, captchaURL: action.url }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuthed) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuthed } });
export const setCaptchaURL = (url) => ({ type: SET_CAPTCHA_URL, url});

export const getAuth = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true))
    }
}

export const getLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuth())
        dispatch(setCaptchaURL(null))
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaURL())
    } else {
        let action = stopSubmit('login', { _error: response.messages.toString() });
        dispatch(action)
    }
}

export const getLogout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
        console.log(response.url)
        dispatch(setCaptchaURL(response.url))

}

export default authReducer; 