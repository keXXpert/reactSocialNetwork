import React from 'react';
import UserItem from './UserItem/UserItem';
import myCSS from './UsersSearch.module.css'

const UsersSearch = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPage);
    if (pagesCount > 10) {pagesCount = 10};

    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }
    return (
        <main>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && myCSS.selectedPage} onClick={() => { props.onPageClick(p) }}>{p} </span>
                })}

            </div>
            {props.users.map(el => (<UserItem {...el} followUser={props.followUser} toggleIsFollowing={props.toggleIsFollowing} isFollowing={props.isFollowing} />))}
        </main>
    )
}

export default UsersSearch;