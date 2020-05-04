import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            let action = {
                type: 'FOLLOW',
                userId: userId
            }
            dispatch(action);
        },
        setUsers: (users) => {
            let action = {
                type: 'SET-USERS',
                users: users
            }
            dispatch(action);
        }
    }
}

const UsersSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSearch);

export default UsersSearchContainer;