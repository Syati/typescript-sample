// import stylesheets by webpack
require('normalize.css');
require('style.less');

// js
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import App from './src/containers/App';
import configureStore from './src/store/configureStore'


const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
