import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator'
import * as serviceWorker from './serviceWorker';
import {insertDigitsAttribute} from './utils/utils';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <Calculator value='0'/>
  </React.StrictMode>,
  document.getElementById('root')
)
insertDigitsAttribute()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
