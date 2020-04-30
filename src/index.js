import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Alex'},
  {id: 2, name: 'Matt'},
  {id: 3, name: 'Erica'},
  {id: 4, name: 'Beck'},
  {id: 5, name: 'Kate'}
];

let messages = [
  {id: 1, text: 'Hey!'},
  {id: 2, text: 'How are you?'},
  {id: 3, text: 'Yo! My friend!'}
];

let posts = [
  {id: 1, text: 'Hey! How are you?', likes: 5},
  {id: 2, text: 'It\'s my first post', likes: 20}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
