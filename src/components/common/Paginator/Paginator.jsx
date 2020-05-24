import React from 'react';
import myCSS from './Paginator.module.css'

const Paginator = ({totalUsersCount, usersOnPage, currentPage, onPageClick}) => {
    let pagesCount = Math.ceil(totalUsersCount / usersOnPage);
    if (pagesCount > 10) {pagesCount = 10};

    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }
    return (
            <div>
                {pages.map(p => {
                    return <span className={currentPage === p && myCSS.selectedPage} onClick={() => { onPageClick(p) }}>{p} </span>
                })}

            </div>
    )
}

export default Paginator;