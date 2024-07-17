// import React from 'react';
// import {Fragment} from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./Counter";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reactElement = (
  <>
    <Counter />

    <Footer />
  </>
);

root.render(reactElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// reportWebVitals();
