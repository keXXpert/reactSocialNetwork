import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

// My components
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersSearchContainer from './components/UsersSearch/UsersSearchContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route
              exact path='/'
              render={() => <ProfileContainer />}
            />
            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />
            <Route
              path='/dialogs'
              render={() => <DialogsContainer />}
            />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/login' component={Login} />
            <Route
              path='/users'
              render={() => <UsersSearchContainer />}
            />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);