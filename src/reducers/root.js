import { combineReducers } from 'redux';
import Login from './login'
import Loading from './loading'
import Admin from './admin'
import PageLoading from './pageLoading'

export default combineReducers({
   Login,
    Loading,
    Admin,
    PageLoading
});