import { handleActions } from 'redux-actions';

import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/ActionTypes';

const initialState = 0;

export default handleActions({
    [INCREMENT_COUNTER]: (state, action) => {
        return state + 1;
    },

    [DECREMENT_COUNTER]: (state, action) => {
        return state - 1;
    }
}, initialState);




