import React, { Component } from 'react'
import { message } from 'antd'

message.config({
    top: 300,
    duration: 0.8
});

const MesHoc = Com => {
    return class extends Component {

        yes = type => {
               message.success(type)
        }

        render () {
            return <Com {...this.props} yes={this.yes}  />
        }
    }
}

export default MesHoc