import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import searchUsersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer,
    usersPage: searchUsersReducer
});

let store = createStore(reducers);

window.store = store;  // for debugging purposes

export default store;