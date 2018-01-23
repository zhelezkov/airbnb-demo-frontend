/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
