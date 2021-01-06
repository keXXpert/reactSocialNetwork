import React from 'react'
import Dialogs from './Dialogs';
import { connect, ConnectedProps } from 'react-redux';
import { sendMessage } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { RootState } from '../../redux/redux-store';

const mapStateToProps = (state: RootState) => ({
    dialogsPage: state.dialogsPage,
})

const connector = connect(mapStateToProps, { sendMessage })

export type DialogsHOCPropsType = ConnectedProps<typeof connector>

export default compose(
    connector,
    withAuthRedirect
)(Dialogs) as typeof React.Component
