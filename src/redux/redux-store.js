import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;