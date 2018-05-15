import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//Line 7 - this instructs the program to collect the elements that share the id "root" from the index.html file. As we have made our own app, we want to replace these elements with our own, which are located the component which we have called "App". 