import React, { Component } from 'react'
import { connect } from 'react-redux';
import { pageLoaded } from './utils'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { HashRouter as Router, Route, Redirect,　Switch} from 'react-router-dom';
import ContentHome from './ContentHome'
import Page404 from './Page404'
import AddPerson from './AddPerson'
// import AddAdmin from './AddAdmin'
import Bundle from '../components/Bundle'

const AddAdmin = (props) => (
    <Bundle load={() => import('./AddAdmin')}>
        {(Char) => <Char {...props} />}
    </Bundle>
)

const SeeAdmin = (props) => (
    <Bundle load={ () => import('./SeeAdmin') } >
        { (Char) => <Char { ...props } /> }
    </Bundle>
)

const ChangeAdmin = (props) => (
    <Bundle load={ () => import('./ChangeAdmin') } >
        { (Char) => <Char { ...props } /> }
    </Bundle>
)

class Content extends Component {

    componentDidMount () {
        pageLoaded('操作界面')
    }

    handle_getUserConfirmation = () => {
        if (this.props.login.type != 1 ) {
            alert('管理员才能进入！')
            return <Redirect to='/' />
        } else {
            return <AddAdmin />
        }
    }

    handle_getUserConfirmation_1 = (props) => {
        if (this.props.login.type != 1 ) {
            alert('管理员才能进入！')
            return <Redirect to='/' />
        } else {
            return <SeeAdmin  {...props} />
        }
    }

    handle_getUserConfirmation_2 = (props) => {
        if (this.props.login.type != 1 ) {
            alert('管理员才能进入！')
            return <Redirect to='/' />
        } else {
            return <ChangeAdmin  {...props} />
        }
    }

    render () {
        return <div>
                    <Header url={this.props.history} />
                    <Sidebar/>
                    <div className='cont-body' >
                        <Router basename='/cont' >
                            <div style={{
                                position: 'relative'
                            }} >
                                <Switch>
                                    <Route exact ={true} path='/' component={ContentHome} />
                                    <Route path='/addpe' component={AddPerson} />
                                    <Route path='/addadmin'  component={this.handle_getUserConfirmation} />
                                    <Route path='/seeadmin' component={ this.handle_getUserConfirmation_1 }  />
                                    <Route path='/changeadmin/:num' component={ this.handle_getUserConfirmation_2 }  />
                                    <Route path='/*' component={Page404} />
                                </Switch>
                            </div>
                        </Router>
                    </div>
               </div>
    }
}

const select = state => ({
    login: state.Login,
})

export default connect(select)(Content)