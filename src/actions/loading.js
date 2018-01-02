import { LOADING } from '../actions'

export function loading (active) {
    return { type:LOADING, active }
}