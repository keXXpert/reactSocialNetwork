import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.setAuthUserData(response.data.id, response.data.email, response.data.login)
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);