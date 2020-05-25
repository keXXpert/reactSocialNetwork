import React from 'react';
import myCSS from './ProfileBlockForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomTextarea } from '../../../common/Forms/FormsElems';
import { requiredField } from '../../../../untils/validators/validatos';

const ProfileBlockForm = ({ handleSubmit, contacts, error }) => {
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
            <p>Contacts:</p> {Object.keys(contacts).map(key => {
                return <div style={{paddingLeft: '10px'}}>{key}: <Field key={key} placeholder={contacts[key]} name={'contacts.'+key} component={CustomInput} /></div>
            })}
        </form>
    )
}

const ProfileFormRedux = reduxForm({form:'profile'})(ProfileBlockForm)

export default ProfileFormRedux