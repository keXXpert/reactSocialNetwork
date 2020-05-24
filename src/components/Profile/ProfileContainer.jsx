import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {

    let userId = props.match.params.userId;
    if (!userId) {
        userId = props.authedUserId
    }

    useEffect(() => {
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId])


    if (!props.isAuthed) return <Redirect to='/login' />

    return <Profile isOwner={!props.match.params.userId}profile={props.profile} status={props.status}
        updateUserStatus={props.updateUserStatus}
        postUserAvatar={props.postUserAvatar} />

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);