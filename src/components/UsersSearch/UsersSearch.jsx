import React from 'react';
import UserItem from './UserItem/UserItem';
import myCSS from './UsersSearch.module.css'

const UsersSearch = ({totalUsersCount, usersOnPage, currentPage, users, followUser, isFollowing, onPageClick}) => {
    let pagesCount = Math.ceil(totalUsersCount / usersOnPage);
    if (pagesCount > 10) {pagesCount = 10};

    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }
    return (
        <main>
            <div>
                {pages.map(p => {
                    return <span className={currentPage === p && myCSS.selectedPage} onClick={() => { onPageClick(p) }}>{p} </span>
                })}

            </div>
            {users.map(el => (<UserItem {...el} followUser={followUser} isFollowing={isFollowing} />))}
        </main>
    )
}

export default UsersSearch;