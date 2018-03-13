import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
