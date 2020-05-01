import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './redux/state';
// import {addPost} from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App {...state} />
    </React.StrictMode>,
    document.getElementById('root'));
}
