import Redux from 'redux';
import {increment, decrement} from '../actions/counter';

import { handleActions } from 'redux-actions';

let initialState = {
    state: 0
};

export default handleActions({
    
}, initialState);




