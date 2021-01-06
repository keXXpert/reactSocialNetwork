import Header from './Header';
import { connect, ConnectedProps } from 'react-redux';
import { getLogout } from '../../redux/authReducer';
import { RootState } from '../../redux/redux-store';

let mapStateToProps = (state: RootState) => {
    return {
        auth: state.auth
    }
}

const connector = connect(mapStateToProps, { getLogout })

export type HeaderHOCPropsType = ConnectedProps<typeof connector>

export default connector(Header);