import React, { Component } from 'react';
import { connect } from 'react-redux'

class ChangeAdmin extends Component {

    constructor (props) {
        super(props)
        this.state = {
            msg: ''
        }
    }

    componentDidMount () {
        console.log(this.props.match.params.num)
        let num = this.props.match.params.num
        // let  [ nowMsg ]  = this.props.adminMsg.filter( function (e) {
        //     return e.id == num
        // } )
        // console.log(nowMsg)
        // this.setState( { msg: nowMsg } )
        console.log(this.props.adminMsg)
        if ( this.props.adminMsg.length != 0 ) {
            localStorage.setItem('adminMsg', JSON.stringify(this.props.adminMsg) )
            let [nowMsg] = this.props.adminMsg.filter( function (e) {
                    return e.id == num
                } )
            this.setState( { msg: nowMsg } )
        } else {
            let [nowMsg] = JSON.parse(localStorage.getItem('adminMsg')).filter( function (e) {
                return e.id == num
            } )
            this.setState( { msg: nowMsg } )
        }
        // this.setState( { msg: nowMsg } )
    }

    componentWillUnmount () {
        localStorage.clear()
    }

    render () {
        return <div>
            { this.state.msg.id }
        </div>
    }
}

const select = state => ({
    adminMsg: state.Admin.adminList
})

export default connect(select)(ChangeAdmin)