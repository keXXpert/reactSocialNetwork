import { getAuth } from './authReducer';

const SET_INITIALIZE = 'SET-INITIALIZE';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
        return { ...state, initialized: true }
        default:
            return state;
    }
}

export const setInitialize = () => ({ type: SET_INITIALIZE });

export const initializeApp = () => (dispatch) => {
    let authPromise = dispatch(getAuth());
    // let somethingPromise= dispatch(something);
    // let someyhingElsePromise = dispatch(somethingElse);
    Promise.all([authPromise])
    .then(()=> {
        dispatch(setInitialize());
    })
}


export default appReducer; 