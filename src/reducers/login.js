import { LOGIN, LOGIN_OUT } from "../actions/index";
import { createReducer } from './utils';

const initialState = {
    isLogin: window.sessionStorage.getItem('isLogin'), // 是否登录
    username: window.sessionStorage.getItem('username'), // 用户名
    type: window.sessionStorage.getItem('type'), // 是否超级管理员
    isErorr: false, // 登录出错
    isInfoWaring: false // 用户名或密码错误
}

const handlers = {
    [LOGIN]: (_, active) => {
        // return { isLogin: active.active }
        if ( active.active ) {
            return {
                isLogin: true,
                username: active.active.username,
                type: active.active.isSupper,
                isInfoWaring: false
            }
        } else {
            return {
                isInfoWaring: true
            }
        }
    },
    [LOGIN_OUT]: (_, active) => {
        return {
            isLogin: false,
            username: '',
            type: ''
        }
    }
}

export default createReducer(initialState, handlers);
