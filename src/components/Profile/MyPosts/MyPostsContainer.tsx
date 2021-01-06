import MyPosts from './MyPosts';
import { connect, ConnectedProps } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';
import { RootState } from '../../../redux/redux-store';

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts
    }
}

const connector = connect(mapStateToProps, { addNewPost })

export type MyPostsHOCPropsType = ConnectedProps<typeof connector>

export default connector(MyPosts);