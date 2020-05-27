import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar, saveProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = ({match:{params:{userId:propsId}}, authedUserId, getUserProfile, getUserStatus, ...props}) => {

    let userId = propsId;
    if (!userId) {
        userId = authedUserId
    }

    useEffect(() => {
        getUserProfile(userId);
        getUserStatus(userId);
    }, [userId, getUserProfile, getUserStatus])


    if (!props.isAuthed) return <Redirect to='/login' />

    return <Profile isOwner={!propsId}profile={props.profile} status={props.status}
        updateUserStatus={props.updateUserStatus}
        postUserAvatar={props.postUserAvatar}
        saveProfile={props.saveProfile} />

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);