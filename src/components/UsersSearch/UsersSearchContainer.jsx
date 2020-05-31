import { connect } from 'react-redux';
import UsersSearch from './UsersSearch';
import React, { useEffect } from 'react';
import { setCurrentPage, getUsers, followUser } from '../../redux/usersReducer';
import { getUsersSel, getUsersOnPageSel, getTotalUsersCountSel, getCurrentPageSel, getIsFetchingSel, getIsFollowingSel } from '../../redux/usersSelectors';
import CssLoader from '../common/Preloader/CssLoader';

const UsersSearchContainer = ({currentPage, usersOnPage, getUsers, 
    setCurrentPage, users, totalUsersCount, followUser, isFetching, isFollowing }) => {

    useEffect(() => {
        getUsers(currentPage, usersOnPage)
    }, [currentPage, usersOnPage])
    
    const onPageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        getUsers(pageNumber, usersOnPage);
    }

    return <>
        {isFetching ? <CssLoader /> : null}
        <UsersSearch
            users={users}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            usersOnPage={usersOnPage}
            followUser={followUser}
            onPageClick={onPageClick}
            isFetching={isFetching}
            isFollowing={isFollowing}
        />
    </>
}

// Class component just for demo purposes
//
// class UsersSearchContainer extends React.Component {
//     componentDidMount() {
//         this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
//     }

//     onPageClick = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         this.props.getUsers(pageNumber, this.props.usersOnPage);
//     }

//     render() {

//         return <>
//             {this.props.isFetching ? <CssLoader /> : null}
//             <UsersSearch
//                 users={this.props.users}
//                 totalUsersCount={this.props.totalUsersCount}
//                 currentPage={this.props.currentPage}
//                 usersOnPage={this.props.usersOnPage}
//                 followUser={this.props.followUser}
//                 onPageClick={this.onPageClick}
//                 isFetching={this.props.isFetching}
//                 isFollowing={this.props.isFollowing}
//             />
//         </>
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSel(state),
        usersOnPage: getUsersOnPageSel(state),
        totalUsersCount: getTotalUsersCountSel(state),
        currentPage: getCurrentPageSel(state),
        isFetching: getIsFetchingSel(state),
        isFollowing: getIsFollowingSel(state)
    }
}

export default connect(mapStateToProps,
    { followUser, setCurrentPage, getUsers })
    (UsersSearchContainer);