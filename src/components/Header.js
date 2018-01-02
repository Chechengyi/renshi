import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login_out } from '../actions/login'
import { Link } from 'react-router-dom'
import { Menu, Icon, Dropdown } from 'antd';
import { Row, Col } from 'antd'

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to='/cont/addadmin' ><Icon type="user-add" />添加管理员</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to='/cont/seeadmin' ><Icon type="eye-o" />  查看管理员</Link>
        </Menu.Item>
    </Menu>
);

class Header extends Component {

    componentDidMount () {
    }

    handleLoginOut () {
        this.props.dispatch(login_out())
    }

    goBack () {
        this.props.url.goBack()
    }

    render () {

        return <Row style={{'backgroundColor': '#404040'}}   >
            <Col span={10} style={{'textAlign': 'center'}} >
                <h1 style={{'color': '#fff', 'lineHeight': '80px'}} >惠与大学人事管理系统</h1>
            </Col>
            <Col span={14} >
                <Menu
                        mode='horizontal'
                        className='nav-header'
                        style={{ 'lineHeight': '80px'}}
                        selectable={false}
                        theme='dark'>
                             <Menu.Item key="one"><Icon type="left-circle-o" onClick={ e => { this.goBack(e) } }  style={{'fontSize': '24px', 'marginTop': '30px'}} /></Menu.Item>
                    {/*{ (this.props.type == 1)? <Menu.Item key="two" style={{'fontSize': '22px'}} ><Link to='/cont/addadmin' ><Icon type="user-add" />添加管理员</Link></Menu.Item>: null}*/}
                    { (this.props.type == 1)? <Menu.Item key="two" style={{'fontSize': '22px'}} >
                        <Dropdown overlay={menu} trigger={['hover']}>
                            <a>
                                <Icon type="down" /> 管理员选项
                            </a>
                        </Dropdown>
                    </Menu.Item> : ''  }
                             <Menu.Item key="three" style={{'fontSize': '22px'}} >
                                 <div onClick={ e => { this.handleLoginOut(e) }} >
                                    <Icon type="close"  />退出登录
                                 </div>
                             </Menu.Item>
                        </Menu>
            </Col>
        </Row>
    }
}

const select = state => ({
    ...state.Login
})

export default connect(select)(Header)