import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import {
  FirebaseAppProvider,
} from 'reactfire';
import firebaseConfig from './firebase-config';
import Router from './router/Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router />
  </FirebaseAppProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
