import React from 'react';
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { CustomTextarea } from '../common/Forms/FormsElems';
import { maxLengthCreator, requiredField } from '../../utils/validators/validatos';
import { DialogsHOCPropsType } from './DialogsContainer';

type DialogsFormData = {
    newMessage: string
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormData>> = ({ handleSubmit, reset }) => {
    const localHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(evt)
        reset()
    }
    return (
        <form onSubmit={localHandleSubmit}>
            <Field component={CustomTextarea} name='newMessage' placeholder='Enter message...' validate={[requiredField, maxLength50]} />
            <button>Send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm<DialogsFormData>({ form: 'newMessage' })(AddMessageForm)

const Dialogs: React.FC<DialogsHOCPropsType> = ({ sendMessage, dialogsPage }) => {
    const onSubmit = (formData: DialogsFormData) => {
        sendMessage(formData.newMessage)
    }

    const { dialogs, messages } = dialogsPage

    return (
        <main className={myCSS.dialogs}>
            <div className={myCSS.dialogList}>
                {dialogs.map(el => (<DialogItem key={el.id} name={el.name} id={el.id} />))}
            </div>
            <div className={myCSS.messages}>
                {messages.map(el => (<Message key={el.text} message={el.text} />))}
                <ReduxAddMessageForm onSubmit={onSubmit} />
            </div>
        </main>
    )
}

export default Dialogs;