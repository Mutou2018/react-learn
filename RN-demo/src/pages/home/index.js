import React, { Component, useCallback, PureComponent } from 'react'
import { SafeAreaView, View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import CXIcon from "../../components/CXIcon";
import styles from './index.style'
import { Storage } from '../../util/utils'
import {getClassify} from '../../service/auth'

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      storageLogin: ''
    }
  }

  static navigationOptions = {
    title: '首页',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarIcon: ({ tintColor, focused }) => (
      focused
        ?
        <CXIcon name='icon-index' size={30} color='#226688'></CXIcon>
        :
        <CXIcon name='icon-home-selected' size={30} color='#226688'></CXIcon>
    ),
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#f4511e"
      />
    ),
  };
  componentDidMount() {
    this.handleGetClassify()
  }
  handleGetClassify=async()=>{
    let res = await getClassify({current:1,size:10})
    if(res.status === 200){
      alert('成功')
    }
  }
  navigationTo = (url) => {
    const { navigation } = this.props
    console.log('url', url)
    navigation.navigate(url)
  }
  getStorage = async()=>{
      let data = await Storage.get('token')
      console.log('data', data)
  }
  render() {
    const { login,app } = this.props
    const { storageLogin } = this.state
    const getData = async () => {
      let data = await Storage.get('login')
      console.log('-data', data)
      this.setState(()=>{
        return {
          storageLogin:data
        }
      })
    }
    console.log('app', app)
    return (
      <SafeAreaView style={styles.flexContainer}>
        <Text>app {app.login}</Text>
        <Text onPress={()=>{this.getStorage()}}>getStorage</Text>
        <Text onPress={()=>{this.handleGetClassify()}}>getData</Text>
        <Text onPress={() => { this.props.dispatch({ type: 'app/login', payload: { login: "changeLogin" } }) }}>chnageModelState</Text>
        <Text style={styles.flexText} onPress={() => this.navigationTo('User')}>User</Text>
        <Text style={styles.flexText} onPress={() => this.props.navigation.push('Home')}>Home</Text>
        {/* <Text style={styles.flexText} onPress={()=>this.props.navigation.goBack()}>goBack</Text> */}
        <Text style={styles.flexText} onPress={() => this.navigationTo('Login')}>login</Text>
        <Text style={styles.flexText} onPress={() => this.props.navigation.navigate('User', {
          otherParam: 'anything you want here',
        })}>User</Text>
        <Text style={styles.flexText} onPress={() => this.props.navigation.navigate('Message')}>message</Text>
        <Button title="test" onPress={() => { console.log('1111', 1111) }}></Button>
      </SafeAreaView>
    )
  }
}
export default connect(({ app }) => ({app}))(Home)