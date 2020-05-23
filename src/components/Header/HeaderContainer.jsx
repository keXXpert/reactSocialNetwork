import Header from './Header';
import { connect } from 'react-redux';
import { getLogout } from '../../redux/authReducer';

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getLogout })(Header);