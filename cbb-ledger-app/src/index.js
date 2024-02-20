// src/index.js

require('dotenv').config();


// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HttpService from "./services/HttpService";
import StoreService from "./services/StoreService";
import UserService from "./services/UserService";

const { history, store } = StoreService.setup();

const renderApp = () => ReactDOM.render(<App {...{store, history}} />, 
 document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
