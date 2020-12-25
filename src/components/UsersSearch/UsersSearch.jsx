import React from 'react';
import UserItem from './UserItem/UserItem';
// import myCSS from './UsersSearch.module.css'
import Paginator from '../common/Paginator/Paginator';

const UsersSearch = ({totalUsersCount, usersOnPage, currentPage, users, followUser, isFollowing, onPageClick}) => {
    let pagesCount = Math.ceil(totalUsersCount / usersOnPage);
    let pagesToDisplay = 10;

     return (
        <main>
            <Paginator pagesCount={pagesCount} pagesToDisplay={pagesToDisplay}
                currentPage={currentPage} onPageClick={onPageClick} />

            {users.map(el => (<UserItem key={el.id} {...el} followUser={followUser} isFollowing={isFollowing} />))}
        </main>
    )
}

export default UsersSearch;