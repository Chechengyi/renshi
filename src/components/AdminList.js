import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon } from 'antd';
import { admin_page } from '../actions/admin'
import { Button } from 'antd'

const btnStyle = {
    marginRight: '10px'
}

class AdminList extends Component {

    constructor (props) {
        super(props)
        this.columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '电话',
                dataIndex: 'tel',
                key: 'tel',
            },{
                title: '',
                dataIndex: '',
                render: (text, record) => <div>
                    <Button  style={btnStyle} onClick={ () => { this.changeRow(record)} } >修改</Button>
                    <Button type="danger">删除</Button>
                </div>
            }
        ];
    }

    componentDidMount () {
        this.props.dispatch(admin_page(this.props.num))
    }

    changeRow = (e, text) => {
        console.log(this.props.history.push('/changeadmin/' + e.id ))
    }

    handleChange = (pagination) => {
        this.props.dispatch(admin_page(pagination.current))
    }

    render () {
        return <div>
            <Table
                columns={this.columns}
                dataSource={this.props.adminList}
                pagination = {
                    {
                        defaultCurrent: this.props.num,
                        total: 50,
                        defaultPageSize: 5

                }}
                loading={this.props.PageLoading}
                onChange={ this.handleChange }
            />
        </div>
    }
}

const select = state => ({
    adminList: state.Admin.adminList,
    num: state.Admin.pageNum,
    PageLoading: state.PageLoading.active
})

export default connect(select)(AdminList)