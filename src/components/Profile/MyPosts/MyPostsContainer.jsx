// import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer> 
//             {(store) => {
//             let state = store.getState();
//             let updateNewPostText = (text) => {
//                 let action = {
//                     type: 'UPDATE-NEW-POST-TEXT',
//                     text: text
//                 }
//                 store.dispatch(action);
//             }
        
//             let addNewPost = () => {
//                 store.dispatch({ type: 'ADD-POST' });
//             }
//             return (<MyPosts
//                 updateNewPostText={updateNewPostText}
//                 addNewPost={addNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)
//         }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = {
                type: 'UPDATE-NEW-POST-TEXT',
                text: text
            }
            dispatch(action);
        },
        addNewPost: () => {
            dispatch({ type: 'ADD-POST' });
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;