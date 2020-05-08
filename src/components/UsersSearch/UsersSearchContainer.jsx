import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            let action = {
                type: 'SET-CURRENT-PAGE',
                currentPage: pageNumber
            }
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            let action = {
                type: 'SET-TOTAL-USERS-COUNT',
                totalUsersCount: totalCount
            }
            dispatch(action);
        }
    }
}

const UsersSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSearch);

export default UsersSearchContainer;