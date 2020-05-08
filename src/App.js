import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// My components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import UsersSearchContainer from './components/UsersSearch/UsersSearchContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route 
            exact path='/' 
            render={() => <Profile />}
          />
          <Route 
            path='/profile'
            render={() => <Profile />} 
          />
          <Route 
            path='/dialogs'
            render={() => <DialogsContainer />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route 
            path='/users'
            render={() => <UsersSearchContainer />} 
          />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
