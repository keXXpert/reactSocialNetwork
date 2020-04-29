import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
            New Post
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={myCSS.posts}>
                <Post message='Hey! How are you?' likes='5' />
                <Post message="It's my first post" likes='20' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;