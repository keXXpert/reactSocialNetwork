import React from 'react';
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { CustomTextarea } from '../common/Forms/FormsElems';
import { maxLengthCreator, requiredField } from '../../untils/validators/validatos';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={CustomTextarea} name='newMessage' placeholder='Enter message...' validate={[requiredField, maxLength50]} />
            <button>Send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({ form: 'newMessage' })(AddMessageForm)

const Dialogs = ({sendMessage, dialogsPage: {dialogs, messages}}) => {

    let dialogsElements = dialogs.map(el => (<DialogItem name={el.name} id={el.id} />))
    let messagesElements = messages.map(el => (<Message message={el.text} />))

    const onSubmit = (formData) => {
        sendMessage(formData.newMessage)
    }

    // if (!props.isAuthed) return <Redirect to='/login' />

    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                {dialogsElements}
            </div>
            <div className={myCSS.messages}>
                {messagesElements}
                <ReduxAddMessageForm onSubmit={onSubmit}/>
            </div>
        </main>
    )
}

export default Dialogs;