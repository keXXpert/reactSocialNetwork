import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
    //     if (this.props.users.length === 0) {
    //         this.props.toggleIsFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    // this.props.toggleIsFetching(false);
                    this.props.setUserProfile(response.data);
                });
    //     }
    }

    render() {
        return <Profile profile={this.props.profile}/>
  
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
        // users: state.usersPage.users,
        // usersOnPage: state.usersPage.usersOnPage,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        // isFetching: state.usersPage.isFetching
    }
}

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);