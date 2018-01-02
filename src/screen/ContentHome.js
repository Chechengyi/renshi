import React, { Component } from 'react'
import { Row, Col } from 'antd'
import {Link} from 'react-router-dom'

class ContentHome extends Component {
    render () {
        return <div style={{'position': 'absolute', 'top': 0, 'width': '100%'}} >
            <Row type='flex' justify='center' style={{'marginTop': '100px'}} className='animated bounceInLeft' >
                <Col span={4} className='content-item' ><Link to='/addpe' >添加员工 </Link> </Col>
                <Col span={4} className='content-item' >查看员工</Col>
                <Col span={4} className='content-item' >添加部门</Col>
                <Col span={4} className='content-item' >查看部门</Col>
            </Row>
        </div>
    }
}

export default ContentHome