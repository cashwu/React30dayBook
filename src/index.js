import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


setInterval(() => {

  const reactElement = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'hello world', 'aaa', 'bbb'),
    React.createElement('h2', null, 'time is ', new Date().toLocaleTimeString()),
  );

  root.render(reactElement)
}, 1000);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// reportWebVitals();
