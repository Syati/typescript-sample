import { createStore, applyMiddleware} from "redux";
let thunk = require('redux-thunk');
let createLogger = require('redux-logger');

import reducer from '../reducers/rootReducer';


const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    logger,
    thunk
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
