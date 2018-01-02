import React from 'react';
import Main from './components/Main'
import { Provider } from 'react-redux';
import store from './store'
import './App.css'

export default () => (
    <Provider store={store} >
        <Main/>
    </Provider>
)


