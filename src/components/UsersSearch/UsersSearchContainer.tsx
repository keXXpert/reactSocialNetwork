import { connect, ConnectedProps } from 'react-redux';
import UsersSearch from './UsersSearch';
import React, { useEffect } from 'react';
import { getUsers, followUser, usersActions } from '../../redux/usersReducer';
import { getUsersSel, getUsersOnPageSel, getTotalUsersCountSel, getCurrentPageSel, getIsFetchingSel, getIsFollowingSel } from '../../redux/usersSelectors';
import CssLoader from '../common/Preloader/CssLoader';
import { RootState } from '../../redux/redux-store'
import { FormValuesType } from './UsersSearchForm/UsersSearchForm';

type UsersHOCPropsType = ConnectedProps<typeof connector>

const UsersSearchContainer: React.FC<UsersHOCPropsType> = ({
    currentPage,
    usersOnPage,
    filter,
    query,
    getUsers,
    setCurrentPage,
    users,
    totalUsersCount,
    followUser,
    isFetching,
    isFollowing,
    setFilter,
    setQuery
}) => {

    useEffect(() => {
        getUsers(currentPage, usersOnPage, query, filter)

        // eslint-disable-next-line
    }, [currentPage, usersOnPage, filter, query])

    const onPageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        getUsers(pageNumber, usersOnPage);
    }

    const onQuery = ({ query, filter }: FormValuesType) => {
        setFilter(filter)
        setQuery(query)
        setCurrentPage(1)
    }

    return <>
        {isFetching && <CssLoader />}
        <UsersSearch
            users={users}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            usersOnPage={usersOnPage}
            followUser={followUser}
            onPageClick={onPageClick}
            isFollowing={isFollowing}
            onQuery={onQuery}
            isFetching={isFetching}
        />
    </>
}

// Class component just for demo purposes

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

let mapStateToProps = (state: RootState) => {
    return {
        users: getUsersSel(state),
        usersOnPage: getUsersOnPageSel(state),
        totalUsersCount: getTotalUsersCountSel(state),
        currentPage: getCurrentPageSel(state),
        isFetching: getIsFetchingSel(state),
        isFollowing: getIsFollowingSel(state),
        filter: state.usersPage.filter,
        query: state.usersPage.query
    }
}

const connector = connect(mapStateToProps,
    {
        followUser,
        setCurrentPage: usersActions.setCurrentPage,
        setQuery: usersActions.setQuery,
        setFilter: usersActions.setFilter,
        getUsers
    })

export default connector(UsersSearchContainer);