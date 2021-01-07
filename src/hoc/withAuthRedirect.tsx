import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/redux-store';

export const withAuthRedirect = (Component: typeof React.Component) => {
    const RedirectComponent: React.FC<RedirectHOCPropsType> = (props) => {
        if (!props.isAuthed) return <Redirect to='/login' />

        return <Component {...props} />
    }

    const mapStateToPropsRedirect = (state: RootState) => ({
        isAuthed: state.auth.isAuthed
    })

    const connector = connect(mapStateToPropsRedirect)

    type RedirectHOCPropsType = ConnectedProps<typeof connector>

    return connector(RedirectComponent)
}
