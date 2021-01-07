import { securityAPI } from "../api/endpoints/security";
import { authAPI } from "../api/endpoints/auth";
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// types

export interface AuthInitialStateType {
    userId: number | null
    email: string | null
    login: string | null
    isAuthed: boolean
    captchaURL: string | null
}

interface DataType {
    userId: number | null
    email: string | null
    login: string | null
    isAuthed: boolean
}

interface SetUserDataType {
    type: typeof SET_USER_DATA
    data: DataType
}

interface SetCapthaURLType {
    type: typeof SET_CAPTCHA_URL
    url: string | null
}

export type AuthActionsType = SetUserDataType | SetCapthaURLType

// reducer

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

let initialState: AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuthed: false,
    captchaURL: null  //if null, captcha is not required
}

const authReducer = (state = initialState, action: AuthActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case SET_CAPTCHA_URL:
            return { ...state, captchaURL: action.url }
        default:
            return state;
    }
}


// action creators

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuthed: boolean): SetUserDataType => ({ type: SET_USER_DATA, data: { userId, email, login, isAuthed } });
export const setCaptchaURL = (url: string | null): SetCapthaURLType => ({ type: SET_CAPTCHA_URL, url });

// thunk creators

export const getAuth = (): ThunkAction<Promise<void>, AuthInitialStateType, unknown, AuthActionsType> => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true))
    }
}

export const getLogin = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<Promise<void>, AuthInitialStateType, unknown, Action<string>> => async (dispatch) => {
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

export const getLogout = (): ThunkAction<Promise<void>, AuthInitialStateType, unknown, AuthActionsType> => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURL = (): ThunkAction<Promise<void>, AuthInitialStateType, unknown, AuthActionsType> => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    console.log(response.url)
    dispatch(setCaptchaURL(response.url))

}

export default authReducer; 