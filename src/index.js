// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

  const reactElement = (
    <div id="wrapper" className='foo'>
      <ul>
        <li className='list-item'>item 1</li>
        <li className='list-item'>item 2</li>
        <li className='list-item'>item 3</li>
      </ul>

      <button id='button1'>i am a button</button>
    </div>
  );

  root.render(reactElement)



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// reportWebVitals();
