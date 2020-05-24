import React from 'react';
import myCSS from './ProfileBlockForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomTextarea } from '../../../common/Forms/FormsElems';
import { requiredField } from '../../../../untils/validators/validatos';

const ProfileBlockForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save changes</button></div>
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
            {/* <p>Name: <span className={myCSS.textValue}>{fullName}</span></p>
            <p>About me: <span className={myCSS.textValue}>{aboutMe ? aboutMe : '---'}</span></p>
            <p>Looking for a job? <span className={myCSS.textValue}>{lookingForAJob ? 'Yes' : 'No'}</span></p>
            {lookingForAJobDescription && <p>Job title: <span className={myCSS.textValue}>{lookingForAJobDescription ? lookingForAJobDescription : 'No'}</span></p>}
            <p>Contacts:</p> {Object.keys(contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactText={contacts[key]} />
            })} */}
        </form>
    )
}

const ProfileFormRedux = reduxForm({form:'profile'})(ProfileBlockForm)

export default ProfileFormRedux