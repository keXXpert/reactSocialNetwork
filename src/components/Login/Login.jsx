import React from 'react';
import myCSS from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { getLogin, getLogout } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CustomInput } from '../common/Forms/FormsElems';
import { requiredField } from '../../untils/validators/validatos';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Login' name='email' component={CustomInput} validate={[requiredField]} />
        </div>
        <div>
            <Field placeholder='Password' name='password' component={CustomInput} validate={[requiredField]} type={'password'} />
        </div>
        <div>
            <Field component='input' name='rememberMe' type={'checkbox'} />remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
}


const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLogin(formData.email, formData.password, formData.rememberMe);
    }
    if (props.auth.isAuthed) return <Redirect to="/profile" />
    
    return <div>
        <h3>Login</h3>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getLogin, getLogout })(Login);