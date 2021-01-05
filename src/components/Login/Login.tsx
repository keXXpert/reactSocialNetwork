import React from 'react';
import myCSS from './Login.module.css';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { getLogin } from '../../redux/authReducer';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CustomInput } from '../common/Forms/FormsElems';
import { requiredField } from '../../utils/validators/validatos';
import { RootState } from '../../redux/redux-store';

interface LoginFormPropType {
    captchaURL: string | null
}

type LoginHOCPropsType = ConnectedProps<typeof connector>

interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<LoginFormPropType & InjectedFormProps<LoginFormData, LoginFormPropType>> = ({ handleSubmit, error, captchaURL }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder='Login' name='email' component={CustomInput} validate={[requiredField]} />
        </div>
        <div>
            <Field placeholder='Password' name='password' component={CustomInput} validate={[requiredField]} type={'password'} />
        </div>
        <div>
            <Field component='input' name='rememberMe' type={'checkbox'} />remember me
        </div>
        {captchaURL && <div>
            <div><img src={captchaURL} alt='Captcha' /></div>
            <div>
                <Field placeholder='Captcha' name='captcha' component={CustomInput} validate={[requiredField]} />
            </div>
        </div>}
        {error && <div className={myCSS.globalError}>{error}</div>}
        <div>
            <button>Log in</button>
        </div>
    </form>
}


const ReduxLoginForm = reduxForm<LoginFormData, LoginFormPropType>({ form: 'login' })(LoginForm)

const Login: React.FC<LoginHOCPropsType> = ({ isAuthed, captchaURL, getLogin }) => {
    const onSubmit = (formData: LoginFormData) => {
        getLogin(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (isAuthed) return <Redirect to="/profile" />

    return <div>
        <h3>Login</h3>
        <ReduxLoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
    </div>
}

let mapStateToProps = (state: RootState) => {
    return {
        isAuthed: state.auth.isAuthed,
        captchaURL: state.auth.captchaURL
    }
}

const connector = connect(mapStateToProps, { getLogin })

export default connector(Login);