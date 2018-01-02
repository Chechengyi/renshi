import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios'
import {API} from "../api/index";
import { connect } from 'react-redux'
import { loading } from '../actions/loading'
import MsgHoc from '../components/MsgHoc'
import { pageLoaded } from './utils'

const FormItem = Form.Item

let usernameDom = null
let passwordDom = null
let re_passwordDom = null
let nameDom = null
let telDom = null

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    }
};

let dispatch = null

class AddAdmin extends Component {

    constructor (props) {
        super(props)
        this.state = {
            typeUser: '',  //  用户名是否合格
            typePsw: '', //  检验密码是否合格
            addloading: false
        }
    }

    componentDidMount () {
        pageLoaded( '添加管理员' )
        usernameDom = this.refs.username.refs.input
        passwordDom = this.refs.password.refs.input
        re_passwordDom = this.refs.re_password.refs.input
        nameDom = this.refs.name.refs.input
        telDom = this.refs.tel.refs.input
        // console.log(this.props)
        dispatch = this.props.dispatch
    }

    // 验证用户名是否重复  和两次输入密码是否一致
    handleChange = (e, type) => {
            clearTimeout( this.timer )
            if ( type == 'um' ) {
                this.timer = setTimeout(this.sendAjax, 400 )
            } else {
                this.timer = setTimeout(this.checkPwd, 400)
            }
    }
    //  检查密码是否一致的函数
    checkPwd = () => {
        console.log(1)
        if ( passwordDom.value == re_passwordDom.value ) {
            this.setState( {
                typePsw: true
            } )
        } else {
            this.setState( {
                typePsw: false
            } )
        }
    }
    // 发送验证用户名的异步请求
    sendAjax = () => {
        var self = this
        if ( usernameDom.value == '' ) {
            this.setState( {
                typeUser: ''
            } )
            return false
        }
        axios.get(API + '/seeuser?username=' + usernameDom.value)
            .then( function (res) {
                console.log(res.data)
                if ( res.data ) {
                    self.setState( {
                        typeUser: false
                    } )
                } else {
                    self.setState( {
                        typeUser: true
                    } )
                }
            } )
    }
    //  提交添加管理员请求
    handleSubmit = () => {
        var self = this
        console.log(telDom.value)
        dispatch( loading(true) )
        if ( this.state.typeUser && this.state.typePsw && nameDom.value && telDom.value ) {
            axios.post( API + '/addadmin', {
                username: usernameDom.value,
                password: passwordDom.value,
                name: nameDom.value,
                tel: telDom.value
            } )
                .then( function (res) {
                    if ( res.data ) {
                        dispatch( loading(false) )
                        self.props.yes('添加成功')
                    }
                } )
                .catch( function () {
                    dispatch( loading(false) )
                    alert( '添加失败' )
                } )
        } else {
            alert('请检查表单')
            dispatch( loading(false) )
        }
    }

    render () {

        return <div style={{marginTop: '50px'}} >
            <h1 style={{textAlign: 'center',marginBottom: '50px'}} > 完善管理员信息 </h1>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="用户名"
                            hasFeedback
                            validateStatus={ (typeof this.state.typeUser == 'string') ? '': (this.state.typeUser=== true ) ? 'success':'error' }
                            help={ (typeof this.state.typeUser == 'string') ? '': (this.state.typeUser===true) ? '':'用户名重复！' }
                        >
                            <Input placeholder="用户名" ref='username' id="error"  onChange={ e => {this.handleChange(e, 'um') } }/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="姓名"
                        >
                            <Input placeholder="姓名" ref='name' />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="电话号码"
                        >
                            <Input placeholder="电话号码" ref='tel'  />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码"
                            validateStatus=""
                            help=""
                        >
                            <Input placeholder="密码" type="password" id="error"  ref='password'  />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="重复密码"
                            hasFeedback
                            validateStatus={ (typeof this.state.typePsw == 'string') ? '': (this.state.typePsw=== true ) ? 'success':'error' }
                            help={ (typeof this.state.typePsw == 'string') ? '': (this.state.typePsw===true) ? '':'两次输入密码不一致！' }
                        >
                            <Input placeholder="重复输入密码" ref='re_password' type="password" onChange={ e => {this.handleChange(e, 'pwd') } }  id="error" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            validateStatus=""
                            help=""
                        >
                            <Button type="primary" onClick={ this.handleSubmit } style={{'marginTop': '20px', marginLeft: '60%'}} > 添加 </Button>
                        </FormItem>
                    </Form>
        </div>
    }
}

export default connect()(MsgHoc(AddAdmin))