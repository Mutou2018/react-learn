import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CXIcon from "../../components/CXIcon";
import {
  SafeAreaView,
  Text
} from 'react-native'
import styles from './index.style'

export default class User extends PureComponent {
  static navigationOptions = {
    title: '用户',
    tabBarIcon: ({ tintColor, focused }) => (
      focused
        ?
        <Icon name='user' size={30} color='#226688'></Icon>
        :
        <Icon name='user-o' size={30} color='#226688'></Icon>
    ),
  }
  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView style={styles.flexContainer}>
        <Text>params: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text>
        <Text>params: {JSON.stringify(navigation.getParam('otherParam', 'default value'))}</Text>
        <Text style={styles.flexText}>User</Text>
      </SafeAreaView>
    )
  }
}
