import React from 'react';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let updateNewPostText = (text) => {
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            text: text
        }
        props.dispatch(action);
    }

    let addNewPost = () => { 
        props.dispatch({type: 'ADD-POST'});
    }

    return (
        <MyPosts updateNewPostText={updateNewPostText} addNewPost={addNewPost} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} />
    )
}

export default MyPostsContainer;