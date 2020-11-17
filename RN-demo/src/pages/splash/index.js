import React, { Component } from 'react'
import { SafeAreaView, Text, Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000);
    }
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <SafeAreaView>
                <Image
                    style={{width:'100%',height:'100%'}}
                    source={require('../../assets/img/手机测试壁纸.jpg')}
                />
            </SafeAreaView>
        )
    }
}
