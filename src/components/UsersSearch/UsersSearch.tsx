import React from 'react';
import UserItem from './UserItem/UserItem';
import UsersSearchForm from './UsersSearchForm/UsersSearchForm'
// import myCSS from './UsersSearch.module.css'
import Paginator from '../common/Paginator/Paginator';
import { UsersType } from '../../types/types';

interface UsersSearchPropsType {
    totalUsersCount: number
    usersOnPage: number
    currentPage: number
    users: Array<UsersType>
    followUser: (id: number, follow: boolean) => void
    isFollowing: Array<number>
    onPageClick: (page: number) => void
    onQuery: (values: { query: string, friend: boolean }) => void
    isFetching: boolean
}

const UsersSearch: React.FC<UsersSearchPropsType> = ({ totalUsersCount, usersOnPage, currentPage, users, followUser, isFollowing, onPageClick, onQuery, isFetching }) => {
    let pagesCount = Math.ceil(totalUsersCount / usersOnPage);
    let pagesToDisplay = 10;

    return (
        <main>
            <UsersSearchForm onQuery={onQuery} isFetching={isFetching} />
            <Paginator pagesCount={pagesCount} pagesToDisplay={pagesToDisplay}
                currentPage={currentPage} onPageClick={onPageClick} />

            {users.map(el => (<UserItem key={el.id} {...el} followUser={followUser} isFollowing={isFollowing} />))}
        </main>
    )
}

export default UsersSearch;