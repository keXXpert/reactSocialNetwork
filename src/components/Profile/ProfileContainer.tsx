import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect, ConnectedProps } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar, saveProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { RootState } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';

type ProfileHOCPropsType = ConnectedProps<typeof connector>

/// fixme
type RouterPropsType = {
    match: {
        params: {
            userId: number
        }
    }
}

/// fixme
type AuthRedirectPropsType = {
    isAuthed: boolean
}

const ProfileContainer: React.FC<ProfileHOCPropsType & RouterPropsType & AuthRedirectPropsType> = ({ match: { params: { userId: propsId } }, authedUserId, getUserProfile, getUserStatus, ...props }) => {
    const userId = propsId || authedUserId as number

    useEffect(() => {
        getUserProfile(userId);
        getUserStatus(userId);
    }, [userId, getUserProfile, getUserStatus])


    if (!props.isAuthed) return <Redirect to='/login' />

    return <Profile isOwner={!propsId} profile={props.profile as ProfileType} status={props.status}
        updateUserStatus={props.updateUserStatus}
        postUserAvatar={props.postUserAvatar}
        saveProfile={props.saveProfile} />

}

let mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authedUserId: state.auth.userId
    }
}

const connector = connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, postUserAvatar, saveProfile })

export default compose(
    connector,
    withRouter,
    withAuthRedirect
)(ProfileContainer) as typeof React.Component