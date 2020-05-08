import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersSearchContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <UsersSearch
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                usersOnPage={this.props.usersOnPage}
                followUser={this.props.followUser}
                onPageClick={this.onPageClick}
                isFetching={this.props.isFetching} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            let action = {
                type: 'TOGGLE-FETCHING',
                isFetching: isFetching
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersSearchContainer);