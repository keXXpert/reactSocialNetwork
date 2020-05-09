import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { updateNewPostText, addNewPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    } 
}



const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addNewPost})(MyPosts);

export default MyPostsContainer;