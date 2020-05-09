import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import searchUsersReducer from "./usersReducer";
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer,
    usersPage: searchUsersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;  // for debugging purposes

export default store;