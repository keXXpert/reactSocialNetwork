import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map ( post => <Post message={post.text} likes={post.likes} />)
   
    let newPostChange = (e) => {
        let text = e.target.value;
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
        <div className={myCSS.postsBlock}>
            <h3>My Posts</h3>
            <div>
            New Post
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={newPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={myCSS.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;