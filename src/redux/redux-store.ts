import { createStore, combineReducers, applyMiddleware } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import searchUsersReducer from "./usersReducer"
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
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

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

// @ts-ignore
window.__store__ = store  //just for demo & debugging purposes

export type RootState = ReturnType<typeof reducers>