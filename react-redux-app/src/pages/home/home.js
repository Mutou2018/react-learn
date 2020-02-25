import React, { Component } from 'react';
import home from './home.module.css'
import Header from '../../components/header/header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header param1='abc' param2='c' func1={() =>{console.log('func1')}}></Header>
                <div className={home.mydemo}>home page</div>
            </div>
        );
    }
}

export default Home;