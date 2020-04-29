import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, text: 'Hey! How are you?', likes: 5},
        {id: 2, text: 'It\'s my first post', likes: 20}
    ]

    let postsElements = posts.map ( post => <Post message={post.text} likes={post.likes} />)

    return (
        <div className={myCSS.postsBlock}>
            <h3>My Posts</h3>
            <div>
            New Post
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={myCSS.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;