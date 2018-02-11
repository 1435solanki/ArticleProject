import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Collapsable from './Collapsable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Collapsable />, document.getElementById('root'));
registerServiceWorker();
