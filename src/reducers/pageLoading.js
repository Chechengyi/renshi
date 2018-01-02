import { PAGE_LOADING } from '../actions'
import { createReducer } from './utils';

const initialState = {
    active: false
}

const handlers = {
    [PAGE_LOADING]: (_, action) => {
        return { active: action.active }
    }
}

export default createReducer(initialState, handlers)
