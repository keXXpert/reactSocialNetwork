import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/redux-store';

export const withAuthRedirect = (Component: typeof React.Component) => {
    class RedirectComponent extends React.Component<RedirectHOCPropsType> {
        render() {
            if (!this.props.isAuthed) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    const mapStateToPropsRedirect = (state: RootState) => ({
        isAuthed: state.auth.isAuthed
    })
    
    const connector = connect(mapStateToPropsRedirect)

    type RedirectHOCPropsType = ConnectedProps<typeof connector>

    return connector(RedirectComponent)
}
