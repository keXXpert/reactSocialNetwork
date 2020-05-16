import React from 'react';
import myCSS from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Login' name='login' component='input' />
        </div>
        <div>
            <Field placeholder='Password' name='password' component='input' />
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
        debugger;
    }
    
    return <div>
        <h3>Login</h3>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

export default Login;