// import React from 'react';
// import {Fragment} from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const items =["foo", "bar"];
const items = ["bar"];

let childElement;
if (items.length > 1) {
  childElement = <input type="number" name="number" />;
} else {
  childElement = <input type="password" name="password" />;
}

function MyButton(props) {
  return <button onClick={props.children}>i am a button</button>;
}

const reactElement = (
  <>
    <MyComponent title="hello world" subTitle="sub title" />
    <MyComponent2>it is my component 2</MyComponent2>
    <MyComponent2 children="it is my component 2 -2"></MyComponent2>
    <div id="wrapper" className="foo">
      <ul>
        {items.map((item) => (
          <li className="list-item">{item}</li>
        ))}
        {/* <li className='list-item'>item 1</li>
          <li className='list-item'>item 2</li>
          <li className='list-item'>item 3</li> */}
      </ul>

      {childElement}

      <MyButton />
      <MyButton>{() => alert("123")}</MyButton>
      {/* <button id='button1'>i am a button</button> */}
    </div>
    <div>1213</div>

    <hr />

    <Counter />
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
