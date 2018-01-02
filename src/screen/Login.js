import React, { Component } from 'react'
import { connect } from 'react-redux';
import { pageLoaded } from './utils'
import { login } from '../actions/login'
import { Input, Icon } from 'antd'
import Button from 'antd/lib/button'
import { Row, Col } from 'antd'
import { Select } from 'antd'

const Option = Select.Option

class Login extends Component {

    constructor (props) {
        super(props)
        this.state = {
            select: '0',
            username: '',
            password: ''
        }
    }

    componentDidMount () {
        pageLoaded('登录')
        // 初始化select的值
        this.setState({
            username: '',
            isSupper: this.refs.select.props.defaultValue,
            password: ''
        })
        console.log(this)
    }

    handleClick () {
        // console.log(this.state.username)
        // console.log(this.props.dispatch)
        let loginInfo = {
            username: this.state.username,
            what: this.state.isSupper,
            password: this.state.password
        }
        this.props.dispatch(login(loginInfo))
    }

    selectChange (e) {
        this.setState({
            isSupper: e
        })
    }

    handleUser (e) {
        this.setState( {
            username: e.target.value
        } )
    }

    handlePassWord (e) {
        this.setState( {
            password: e.target.value
        } )
    }

    render () {
        return <div>
            <div style={{'textAlign': 'center'}} ><h1>惠与大学人事管理系统</h1></div>
            <Row style={{'marginTop': '150px'}} >
                <Col push={9} span={6} >
                    <Row> {this.props.isInfoWaring? <div>用户名或密码错误</div>: ''} </Row>
                    <Row gutter={2} style={{'margin': '10px'}} >
                        <Input
                            suffix={<Icon type='user' />}
                            placeholder='用户名'
                            onChange={ e => { this.handleUser(e) } } />
                    </Row>
                    <Row gutter={2} style={{'margin': '10px'}} >
                        <Input
                            type='password'
                            placeholder='密码'
                            suffix={<Icon type='lock'  />}
                            onChange={ e => { this.handlePassWord(e) } }  />
                    </Row>
                    <Row gutter={2} style={{'margin': '10px'}} >
                        <Select
                            style={{ width: 120 }}
                            defaultActiveFirstOption={true}
                            defaultValue='1'
                            ref='select'
                            onSelect={ e => {this.selectChange(e)}}>
                            <Option value='1' >超级管理员</Option>
                            <Option value='2' >普通管理员</Option>
                        </Select>
                    </Row>
                    <Row gutter={2} style={{'margin': '10px'}} >
                        <Button type="primary" onClick={ e => { this.handleClick(e) } } >登录</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    }

}

const select = state => ({
    isInfoWaring: state.Login.isInfoWaring
})

export default connect(select)(Login)