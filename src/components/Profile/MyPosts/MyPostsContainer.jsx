import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    } 
}

export default connect(mapStateToProps, {addNewPost})(MyPosts);