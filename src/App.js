import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// My components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route 
            exact path='/' 
            render={() => <Profile {...props.profilePage} />}
          />
          <Route 
            path='/profile'
            render={() => <Profile {...props.profilePage} />}
          />
          <Route 
            path='/dialogs'
            render={() => <Dialogs {...props.dialogsPage} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
