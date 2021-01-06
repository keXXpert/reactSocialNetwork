import React from 'react';
import myCSS from './ProfileBlockForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { CustomInput, CustomTextarea } from '../../../common/Forms/FormsElems';
import { requiredField } from '../../../../utils/validators/validatos';
import { ContactsType } from '../../../../types/types';

export interface ProfileFormDataType {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
    userId?: number
}

type PorfileFormPropsType = {
    contacts: ContactsType
}

const ProfileBlockForm: React.FC<PorfileFormPropsType & InjectedFormProps<ProfileFormDataType, PorfileFormPropsType>> = ({ handleSubmit, contacts, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save changes</button></div>
            {error && <div className={myCSS.globalError}>{error}</div>}
            <div>
                Name: <Field placeholder='Full name' name='fullName' component={CustomInput} validate={[requiredField]} />
            </div>
            <div>
                Looking for a job: <Field component='input' name='lookingForAJob' type={'checkbox'} />
            </div>
            <div>
                Job description: <Field placeholder='Job description' name='lookingForAJobDescription' component={CustomTextarea} validate={[requiredField]} />
            </div>
            <div>
                About me: <Field placeholder='About me' name='aboutMe' component={CustomTextarea} validate={[requiredField]} />
            </div>
            <p>Contacts:</p> {(Object.keys(contacts) as Array<keyof ContactsType>).map((key: keyof ContactsType) => {
                return <div key={key} style={{ paddingLeft: '10px' }}>{key}: <Field placeholder={contacts[key]} name={'contacts.' + key} component={CustomInput} /></div>
            })}
        </form>
    )
}

const ProfileFormRedux = reduxForm<ProfileFormDataType, PorfileFormPropsType>({ form: 'profile' })(ProfileBlockForm)

export default ProfileFormRedux