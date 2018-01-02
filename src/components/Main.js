import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../screen/Login'
import Bundle from '../components/Bundle'
import Loading from '../components/Loading'
import Page404 from '../screen/Page404'


// import { asyncComponent } from '../components/Bundle'
// import Content from '../screen/Content'

const Content = (props) => (
    <Bundle load={() => import('../screen/Content')}>
        {(Char) => <Char {...props} />}
    </Bundle>
)


class Main extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }

    componentDidMount () {
    }
    // 登录控制函数
    isLogin (component, e) {
        if ( this.props.login.isLogin ) {
            return component(e)
        } else {
            return <Redirect to='/' />
        }
    }

    render () {
        return <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, width: '100%'}} className='father'  >
            { this.props.loading? <Loading />:null}
            <Router>
                <Switch basename='/' >
                    <Route exact={true}  path='/' component={Login} />
                    <Route  path='/cont' component={ e => this.isLogin(Content, e)} />
                    <Route path='/*' component={Page404} />
                </Switch>
            </Router>
        </div>
    }
}

const select = state => ({
    login: state.Login,
    loading: state.Loading.isShow
})

export default connect(select)(Main);