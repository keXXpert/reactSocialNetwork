import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { newMessageUpdate, sendMessage } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    } 
}

const DialogsContainer = connect(mapStateToProps, {newMessageUpdate, sendMessage})(Dialogs);

export default DialogsContainer;