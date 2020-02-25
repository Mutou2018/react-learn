import React, { Component } from 'react';
import Header from '../../components/header/header'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import styles from './login.css'

class Login extends Component {
    render() {
        return (
            <div>
                <Header params1={this.props.myData} />
                <div className={styles.login}>login page</div>
                <p>login: myData = {this.props.myData}</p>
                <button onClick={() => { this.props.getData('123456') }}>更改login的myData</button>
                <button onClick={this.goHome.bind(this)}>跳转至home</button>
                <button onClick={() => { this.goHome() }}>跳转至home</button>
            </div>
        );
    }
    goHome() {
        this.props.history.push('/home')
    }
}

// 把store中的数据映射到组件的props
// const mapStateToProps = (state) => ({
//     // getIn要安装 redux-immutable和immutable
//     myData: state.getIn(['login', 'myData']),
// })

const mapStateToProps = (state) => ({
    myData: state.login.myData,
})
// function mapStateToProps(state){
//     console.log('state :', state);
//     return {
//         myData:state.login.myData
//     }
// }
const mapDispatchToProps = (dispatch) => ({
    getData(data) {
        const action = actionCreators.getData(data)
        dispatch(action)
    }
})

// function mapDispatchToProps(dispatch) {
//     return actionCreators.getData(data)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login);