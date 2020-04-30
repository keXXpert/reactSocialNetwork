import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map ( post => <Post message={post.text} likes={post.likes} />)
    
    let newPostElement = React.createRef();
    

    let addPostN = () => { 
        let text  = newPostElement.current.value;
        props.addPost(text, props);
        newPostElement.current.value = '';
    }

    return (
        <div className={myCSS.postsBlock}>
            <h3>My Posts</h3>
            <div>
            New Post
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostN}>Add post</button>
                </div>
            </div>
            <div className={myCSS.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;