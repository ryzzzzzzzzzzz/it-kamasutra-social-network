import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 42},
    {id: 3, message: 'Blabla', likesCount: 0},
    {id: 4, message: 'hi', likesCount: 1}
];

let dialogs = [
    {id: 1, name: 'Maxim'},
    {id: 2, name: 'Vadim'},
    {id: 3, name: 'Nikolay'},
    {id: 4, name: 'Dmitriy'},
    {id: 5, name: 'Nastya'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
