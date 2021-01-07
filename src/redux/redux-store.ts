import { createStore, combineReducers, applyMiddleware, Action } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import searchUsersReducer from "./usersReducer"
import authReducer from './authReducer'
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: searchUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

export type InferActionTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

// @ts-ignore
window.__store__ = store  //just for demo & debugging purposes

export type RootState = ReturnType<typeof reducers>