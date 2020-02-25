import React, { Component, Fragment } from 'react'

const div = {
    height: '40px',
    lineHeight: '40px',
    fontSize: '36px',
    color: '#fff',
    background: '#409EFF'
}

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div style={div}>
                    header
                </div>
                <div>params1={this.props.params1}</div>
                <div>
                    <button onClick={() => { this.getParentData() }}>click</button>
                </div>
            </Fragment>

        )
    }
    getParentData() {
        console.log('this.props.params :', this.props);
    }
}
