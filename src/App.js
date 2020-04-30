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

  let posts = props.posts;
  let dialogs = props.dialogs;
  let messages = props.messages;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route 
            exact path='/' 
            render={(props) => <Profile {...props} posts={posts} />}
          />
          <Route 
            path='/profile'
            render={(props) => <Profile {...props} posts={posts} />}
          />
          <Route 
            path='/dialogs'
            render={(props) => <Dialogs {...props} dialogs={dialogs} messages={messages} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
