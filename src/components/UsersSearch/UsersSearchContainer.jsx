import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { setCurrentPage, getUsers, followUser } from '../../redux/usersReducer';

class UsersSearchContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.usersOnPage);
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
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps,
    {
        followUser, setCurrentPage, getUsers,
        
    })
    (UsersSearchContainer);