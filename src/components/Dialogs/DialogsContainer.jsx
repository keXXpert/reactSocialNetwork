import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { newMessageUpdate, sendMessage } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, { newMessageUpdate, sendMessage }),
    withAuthRedirect
)(Dialogs);
;