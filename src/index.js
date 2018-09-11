import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PulseYourLogin from './PulseYourLogin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PulseYourLogin/>, document.getElementById('root'));
registerServiceWorker();
