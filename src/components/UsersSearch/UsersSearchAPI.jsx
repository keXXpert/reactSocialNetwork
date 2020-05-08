import React from 'react';
import * as axios from 'axios';
import UsersSearch from './UsersSearch';

class UsersSearchAPI extends React.Component {
    componentDidMount () {
        debugger;
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
        
        return <UsersSearch 
            users = {this.props.users} 
            totalUsersCount = {this.props.totalUsersCount}
            currentPage = {this.props.currentPage}
            usersOnPage={this.props.usersOnPage}
            followUser={this.props.followUser}
            onPageClick={this.onPageClick}/>
        // (
        // <main>
        //     <div>
        //         {pages.map( p => {
        //             return <span className = {this.props.currentPage === (p + 1) && myCSS.selectedPage} onClick={ () => {this.onPageClick(p+1)}}>{p+1} </span>
        //         })}
               
        //     </div>
        //     {this.props.users.map(el => (<UserItem {...el} followUser={this.props.followUser} />))}
        // </main>
        // )
    }
}

export default UsersSearchAPI;