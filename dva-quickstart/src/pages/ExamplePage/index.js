import React, { Component } from 'react'
import {connect} from 'dva'

class ExamplePage extends Component {
    render() {
        const {example} = this.props
        console.log('example', example)
        return (
            <div>
                example page
            </div>
        )
    }
}

export default connect(({example})=>({example}))(ExamplePage)