import React, { useEffect } from 'react';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect, ConnectedProps, Provider } from 'react-redux';
import store, { RootState } from './redux/redux-store';
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
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

// class AppChild extends React.Component {
//   componentDidMount() {
//     this.props.initializeApp();
//   }

//   render() {

type AppHOCPropsType = ConnectedProps<typeof connector>

const AppChild: React.FC<AppHOCPropsType> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    window.addEventListener('unhandledrejection', handleAllErrors)
    return () => {
      window.removeEventListener('unhandledrejection', handleAllErrors)
    }
  }, [])

  const handleAllErrors = (PromiseRejectionEvent: PromiseRejectionEvent) => {
    alert('Oops. Some error occured!')
    console.log(PromiseRejectionEvent)
  }

  if (!initialized) return <Preloader />
  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
          <Route
            exact path='/'
            render={() => <Redirect to='/profile' />}
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
          <Route path='*' render={() => <div>ERROR 404. The requested page is not found.</div>} />
        </Switch>
      </div>
    </div>

  );
}


let mapStateToProps = (state: RootState) => {
  return {
    initialized: state.app.initialized
  }
}

const connector = connect(mapStateToProps, { initializeApp })

const AppContainer = compose(
  withRouter,
  connector)(AppChild) as typeof React.Component;

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;