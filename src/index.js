import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Relevant Person" />, document.getElementById('root'));
registerServiceWorker();
