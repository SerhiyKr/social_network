import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts =[
    {id: 1, message: "Hi, how are you?", likes: 4},
    {id: 2, message: "It's my first post", likes: 7}
];

let dialogs = [
    {id: 1, name: "Serhiy"},
    {id: 2, name: "Pupa"},
    {id: 3, name: "Lupa"}
];

let messages = [
    {id: 1, message: "Hiii"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Fuck youuu..."}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
