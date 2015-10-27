import { createStore, applyMiddleware} from "redux";
import * as thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';

import reducer from '../reducers/rootReducer';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
