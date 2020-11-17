import React, { PureComponent } from 'react'
import { SafeAreaView, Text, Button, TextInput,View,Dimensions,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { StackActions } from "react-navigation";
import { NavigationActions,Storage } from '../../util/utils'
import {loginUser} from '../../service/auth'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
@connect(({ app }) => ({ app }))
export default class Login extends PureComponent {
    constructor(props) {
        super(props)
    }
    state={
        value:"",
        pwd:''
    }
    static navigationOptions = {
        title: "登录"
    }
    submit =async () => {
      let res = await loginUser({username:this.state.value,password:'c4ca4238a0b923820dcc509a6f75849b'})
      console.log('res', res)
      let token = `${res?.token_type} ${res?.access_token}`
      if(res&&token){
        Storage.set('token',token)
        this.props.navigation.dispatch(
            StackActions.reset({
                index:0,
                actions: [NavigationActions.navigate({ routeName: "Main4user" })]
            }))
      }else{
        Storage.set('token','bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOm51bGwsInByZWZpeCI6bnVsbCwic2NvcGUiOlsiYWxsIl0sImVudGVyVHlwZSI6bnVsbCwiZXhwIjoxNjA1NjE1NzMwLCJ1c2VyTmFtZSI6IueuoeeQhuWRmCIsInVzZXJJZCI6IjIiLCJqdGkiOiIxNjUzNWRhMi0yM2Y1LTQzMzktOTNjMi0zYzEwYmEyY2U5OTciLCJjbGllbnRfaWQiOiJ5bHd6LXdlYiJ9.AH1v-IKr9DBbbKE9LABTMYEOr-OF3XIK5qSa4pvRKTk')
        this.props.navigation.navigate("Home")
      }
    }
    loginBtn = () => {
        this.props.navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Main4user" })]
            }))
    }
    onChangeText=(value)=>{
        this.setState({
            value:value
        })
    }
    onChangePwd=(value)=>{
        this.setState({
            pwd:value
        })
    }
    render() {
        const { app, dispatch } = this.props
       
        const {value,pwd} = this.state
        return (
            <SafeAreaView style={{flex:1}}>
                <Text onPress={() => this.loginBtn()}>loginBtn</Text>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputIcon}>
                        <Icon name='user-circle-o' size={30} />
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.onChangeText(text)}
                        value={value} />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputIcon}><Icon name='lock' size={30} /></Text>
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        onChangeText={text => this.onChangePwd(text)}
                        value={pwd} />
                </View>
                <Button onPress={() => this.submit()} title="登录" color="#841584" />
                <Text onPress={() => this.props.navigation.navigate('Splash')}>Splash</Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    inputWrap:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    inputIcon:{
        margin:10,
        width:50,
        justifyContent:'center'
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width:width*0.6
    }
})