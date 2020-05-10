import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { followUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import { usersAPI } from '../../api/api';

class UsersSearchContainer extends React.Component {
    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.usersOnPage)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.items);
                    this.props.setTotalUsersCount(response.totalCount);
                });
        }
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.usersOnPage)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
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