import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { followUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';

class UsersSearchContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
                .then(response => {
                    debugger;
                    this.props.toggleIsFetching(false);
                    debugger;
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
            {this.props.isFetching ? <Preloader /> : null}
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

export default connect(mapStateToProps,
    { followUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })
    (UsersSearchContainer);