import React, { Component } from 'react';
import { pageLoaded } from './utils'
import AdminList from '../components/AdminList'
import { connect } from 'react-redux';
import { Pagination } from 'antd';

class SeeAdmin extends Component {

    constructor (props) {
        super(props)
    }

    componentDidMount () {
        pageLoaded('查看管理员')
        console.log(this)
    }

    handleChange = (page, pagenum) => {
    }

    render () {
        return <div>
            <AdminList {...this.props} />
            {/*<Pagination showQuickJumper defaultCurrent={this.props.num} total={500} onChange={ this.handleChange } />*/}
        </div>
    }
}

const select = state => ({
    num: state.Admin.pageNum
})

export default connect(select)(SeeAdmin)