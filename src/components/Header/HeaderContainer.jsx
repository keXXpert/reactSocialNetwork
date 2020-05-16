import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuth, getLogout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, { getAuth, getLogout })(HeaderContainer);