import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../untils/validators/validatos';
import { CustomTextarea } from '../../common/Forms/FormsElems';

const maxLength50 = maxLengthCreator(50);

const NewPostForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field 
                component={CustomTextarea} 
                name='newPost' 
                placeholder='Enter new post...' 
                validate={[requiredField, maxLength50]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const ReduxPostForm = reduxForm({ form: 'newPost' })(NewPostForm)

const MyPosts = ({posts, addNewPost}) => {
    let postsElements = posts.map(post => <Post message={post.text} likes={post.likes} />)

    const onSubmit = (formData) => {
        debugger;
        addNewPost(formData.newPost);
    }

    return (
        <div className={myCSS.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <p>New Post</p>
                <ReduxPostForm onSubmit={onSubmit} />
            </div>
            <div className={myCSS.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;