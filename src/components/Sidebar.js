import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu

class Sidebar extends Component {

    constructor (props) {
        super(props)
        this.state = {
            current: '3'
        }
    }

    componentDidMount () {
       
    }

    handleClick (e) {
        this.setState( {
            current: e.key
        } )
    }

    render () {
        return <div className='sidebar' >
            <Row type='flex' justify='center' style={{'marginTop': '20px'}}  >
                <Col>
                    <img style={{'width': '100px', 'display': 'block'}} src='./img/267727a18e99ee10d69546a232754cbd@!280x200.jpg' />
                    <div> {this.props.type == 1? '超级管理员': '普通管理员' } ， {this.props.username}  </div>
                </Col>
            </Row>
            <Menu
                theme='dark'
                onClick={ e=> { this.handleClick(e) }}
                mode="inline"
                selectable={false}
                style={{'marginTop': '80px'}}
            >
                <SubMenu key='sub1' title='员工管理' >
                    <Menu.Item key="3"><Icon type="user-add" />添加员工</Menu.Item>
                    <Menu.Item key="4"><Icon type="search" />查看员工</Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' title='部门管理' >
                    <Menu.Item key="3"><Icon type="user-add" />添加部门</Menu.Item>
                    <Menu.Item key="4"><Icon type="search" />查看部门</Menu.Item>
                </SubMenu>
            </Menu>

        </div>
    }
}

const select = state => ({
    ...state.Login
})

export default connect(select)(Sidebar)

