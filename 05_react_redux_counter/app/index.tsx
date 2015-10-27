// import stylesheets by webpack
require('normalize.css');
require('style.less');

// js
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import App from './src/containers/App';
import {Middleware, Store, createStore, combineReducers, applyMiddleware} from 'redux';
import counter from './src/reducers/counter'
import configureStore from './src/store/configureStore'


const initialState = {};

//const store = createStoreWithMiddleware(rootReducer);
const store = configureStore(initialState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
