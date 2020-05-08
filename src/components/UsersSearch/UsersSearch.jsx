import React from 'react';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';
import myCSS from './UsersSearch.module.css'

class UsersSearch extends React.Component {
    componentDidMount () {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);

        let pages = [];
        for (let index = 0; index < pagesCount; index++) {
            pages.push(index);
        }
        return (
        <main>
            <div>
                {pages.map( p => {
                    return <span className = {this.props.currentPage === (p + 1) && myCSS.selectedPage} onClick={ () => {this.onPageClick(p+1)}}>{p+1} </span>
                })}
               
            </div>
            {this.props.users.map(el => (<UserItem {...el} followUser={this.props.followUser} />))}
        </main>
        )
    }
}

export default UsersSearch;