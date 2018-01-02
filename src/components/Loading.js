import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Progress } from 'antd';
import { Spin } from 'antd'

let timer

class Loading extends Component {

    constructor (props) {
        super(props)
        this.state = {
            percent: 0
        }
    }

    componentDidMount () {
        timer = setInterval( () => {
           if ( this.state.percent >= 80 ) {
               clearInterval(timer)
               return false
           }

           this.setState( (prevState, props) => ( {
               percent: prevState.percent + 0.5
           } ) )
        }, 100 )
    }

    componentWillUnmount () {
       clearInterval(timer)
    }

    render () {
        return <div className='loadingPage' >
                <Progress style={{
                    'position': 'absolute',
                    'top': '-6px',
                    'width': '100%',
                    'zIndex': 1000
                }} percent={this.state.percent}  >我是进度条</Progress>
                <Spin style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%'
                }} tip='等待中......' size='large'  />
        </div>
    }
}

const select = state => ({
    ...state.Loading
})

export default connect(select)(Loading)