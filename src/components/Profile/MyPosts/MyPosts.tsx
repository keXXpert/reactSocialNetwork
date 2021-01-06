import React from 'react';
import myCSS from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validatos';
import { CustomTextarea } from '../../common/Forms/FormsElems';
import { MyPostsHOCPropsType } from './MyPostsContainer';

type MyPostsFormData = {
    newPost: string
}

const maxLength50 = maxLengthCreator(50);

const NewPostForm: React.FC<InjectedFormProps<MyPostsFormData>> = ({ handleSubmit, reset }) => {
    const localHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(evt)
        reset()
    }

    return <form onSubmit={localHandleSubmit}>
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

const ReduxPostForm = reduxForm<MyPostsFormData, {}>({ form: 'newPost' })(NewPostForm)

const MyPosts: React.FC<MyPostsHOCPropsType> = ({ posts, addNewPost }) => {
    let postsElements = posts.map(post => <Post key={post.id} message={post.text} likes={post.likes} />)

    const onSubmit = (formData: MyPostsFormData) => {
        addNewPost(formData.newPost)
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