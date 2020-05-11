import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import searchUsersReducer from "./usersReducer";
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer,
    usersPage: searchUsersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;  // for debugging purposes

export default store;