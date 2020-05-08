import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React from 'react';
import * as axios from 'axios';

// import UsersSearchAPI from './UsersSearchAPI';

class UsersSearchAPI extends React.Component {
    componentDidMount () {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }

    render() {
        
        return <UsersSearch 
            users = {this.props.users} 
            totalUsersCount = {this.props.totalUsersCount}
            currentPage = {this.props.currentPage}
            usersOnPage={this.props.usersOnPage}
            followUser={this.props.followUser}
            onPageClick={this.onPageClick} />
    }
}


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

const UsersSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSearchAPI);

export default UsersSearchContainer;