import { ADMIN_PAGE, ADMIN_LIST } from '../actions'
import { PAGE_LOADING } from '../actions'
import axios from 'axios'
import { API } from '../api'

export function admin_page (page) {
    // return { type: ADMIN_PAGE, page  }
    return dispatch => {
        dispatch( { type: ADMIN_PAGE, page } )
        dispatch( { type: PAGE_LOADING, active: true } )
        axios.get( API + '/adminlist', {
            params: {
                page: page,
                nums: 5
            }
        } )
            .then( function (res) {
               dispatch( { type: PAGE_LOADING, active: false } )
               dispatch( {type: ADMIN_LIST, active: res.data} )
            } )
    }
}
// export function admin_list (page) {
//     return dispatch => {
//
//     }
// }