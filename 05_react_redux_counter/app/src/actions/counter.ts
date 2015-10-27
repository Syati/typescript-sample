import { createAction } from 'redux-actions'

import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants/ActionTypes';


export const increment = createAction(INCREMENT_COUNTER);

export const decrement = createAction(DECREMENT_COUNTER);

export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();
    if (counter % 2 === 0) {
        return;
    }
    dispatch(increment());
};

export const incrementAsync = (delay = 1000) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment());
    }, delay);
};
