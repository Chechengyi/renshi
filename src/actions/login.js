import { LOGIN, LOGIN_OUT } from '../actions'
import { LOADING } from '../actions'
import axios from 'axios'
import { API } from '../api'

export function login ( options ) {
    return (dispatch) => {
        // dispatch( { type:LOGIN, active } )
        // window.location.replace('/#/cont');
        dispatch( {type: LOADING, active: true } )
        axios.post( API + '/login', options )
            .then( function (res) {
                dispatch( {type: LOADING, active: false } )
                if ( res.data ) {
                    dispatch( {type: LOGIN, active: res.data } )
                    sessionStorage.setItem('isLogin', true)
                    sessionStorage.setItem('username', res.data.username)
                    sessionStorage.setItem('type', res.data.isSupper)
                    // window.location.replace('/#/cont');
                    // window.location.href = '/cont'
                    console.log(window.location.pathname)
                    window.location.href= '/#/cont'
                    // window.location.href = window.location.pathname + '#/cont'
                } else {
                    dispatch( {type: LOGIN, active: false} )
                }
            } )
            .catch( function (err) {
                dispatch( {type: LOADING, active: false } )
                dispatch( {type: LOGIN, active: 'err' } )
                alert('服务器错误')
            } )
    }
}

export function login_out () {
    return (dispatch) => {
        dispatch( {type: LOADING, active: true } )
        axios.get( API + '/tuichu' )
            .then( function (res) {
                if ( res.data ) {
                    // sessionStorage.setItem('isLogin', true)
                    // sessionStorage.setItem('username', res.data.username)
                    // sessionStorage.setItem('type', res.data.isSupper)
                    sessionStorage.clear()
                    dispatch( {type: LOADING, active: false } )
                    dispatch( {type:LOGIN_OUT} )
                    window.location.href= '/'
                } else {
                    alert('退出失败')
                }
            } )
    }
}