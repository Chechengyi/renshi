import { ADMIN_PAGE, ADMIN_LIST } from '../actions'
import { createReducer } from './utils';

const initialState = {
    pageNum: 1,
    adminList: []
}

const handlers = {
    [ADMIN_PAGE]: (_, action) => {
        return { pageNum: action.page }
    },
    [ADMIN_LIST]: (_, action) => {
        return { adminList: action.active }
    }
}

export default createReducer(initialState, handlers);