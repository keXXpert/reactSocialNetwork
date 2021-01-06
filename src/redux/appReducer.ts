import { ThunkAction } from 'redux-thunk'
import { AuthInitialStateType, getAuth } from './authReducer'

// types

interface SetInitializeActionType {
    type: typeof SET_INITIALIZE
}

export interface AppInitialStateType {
    initialized: boolean
}

export type AppActionTypes = SetInitializeActionType

// reducer

const SET_INITIALIZE = 'app/SET-INITIALIZE'

let initialState: AppInitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case SET_INITIALIZE:
            return { ...state, initialized: true }
        default:
            return state;
    }
}

export const setInitialize = (): SetInitializeActionType => ({ type: SET_INITIALIZE });

export const initializeApp = (): ThunkAction<void, AuthInitialStateType, unknown, AppActionTypes> => (dispatch) => {
    let authPromise = dispatch(getAuth());
    // let somethingPromise= dispatch(something);
    // let someyhingElsePromise = dispatch(somethingElse);
    Promise.all([authPromise])
        .then(() => {
            dispatch(setInitialize());
        })
}


export default appReducer; 