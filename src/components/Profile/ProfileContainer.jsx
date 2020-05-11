import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 7835 }
        this.props.getUserProfile (userId);
    }

    render() {
        return <Profile profile={this.props.profile} />

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainer);