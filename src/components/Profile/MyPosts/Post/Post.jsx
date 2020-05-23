import React from 'react';
import myCSS from './Post.module.css';

const Post = ({message, likes}) => {
    return (
        <div className={myCSS.post}>
            <img src='https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg' alt='User Avatar'/>
            {message}
            <div><span>{likes} Likes</span></div>
            
        </div>
    )
}

export default Post;