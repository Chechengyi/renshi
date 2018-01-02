import { LOADING } from '../actions'
import { createReducer } from './utils';

const initialState = {
    isShow: false
}

const handlers = {
    [LOADING]: (_, active) => {
        return { isShow: active.active }
    }
}

export default createReducer(initialState, handlers);
