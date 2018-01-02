import { PAGE_LOADING } from '../actions'

export function page_loading (active) {
    return { type: PAGE_LOADING, active }
}