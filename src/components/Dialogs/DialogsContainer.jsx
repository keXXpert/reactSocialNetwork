import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { newMessageUpdate, sendMessage } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    } 
}

const DialogsContainer = connect(mapStateToProps, {newMessageUpdate, sendMessage})(AuthRedirectComponent);

export default DialogsContainer;