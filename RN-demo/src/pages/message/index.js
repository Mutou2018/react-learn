import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Message extends PureComponent {
    static navigationOptions = {
        title: "消息",
        tabBarIcon: ({ tintColor, focused }) => (
            focused
                ?
                <Icon name='comment' size={30} color='#226688'></Icon>
                :
                <Icon name='comment-o' size={30} color='#226688'></Icon>
        ),
    }
    render() {
        return (
            <SafeAreaView>
                <Text>message</Text>
                <Text style={styles.linkUrl} onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    test: {
        color: 'red'
    },
    linkUrl: {
        color: 'green', 
        fontWeight: 'bold', 
        fontSize: 24
    }
})