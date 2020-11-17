import React, { useCallback } from 'react'

import { NavigationActions, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './pages/home'
import UserScreen from './pages/user'
import MessageScreen from './pages/message'
import LoginScreen from './pages/login'
import SplashScreen from './pages/splash'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        User: {
            screen: UserScreen
        },
        Message: {
            screen: MessageScreen
        }
    },
    {
        initialRouteName: 'Home',
        mode: 'modal',

    }
)
const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        }
    },
    {
        mode: 'modal'
    }
)
const SplashNavigator = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen
        }
    },
    {
        mode: 'modal'
    }
)
// const AppContainer = createAppContainer(AppNavigator)
const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        User: UserScreen,
        Message: MessageScreen,
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#222', // TabBar 背景色
                height: 50
            },
            labelStyle: {
                fontSize: 12, // 文字大小
                marginBottom: 5
            },
        },
    }
);
const AppContainer = createAppContainer(createSwitchNavigator(
    {
        TabNavigator,
        LoginNavigator,
        SplashNavigator
    },
    {
        initialRouteName: 'SplashNavigator'
    }
))
export default () => {
    const onNavigationStateChange = useCallback((prevState, newState, action) => {
        console.log(prevState, newState, action)
    }, [])

    return (
        <AppContainer
            style={{ flex: 1 }}
            onNavigationStateChange={onNavigationStateChange}
        >
        </AppContainer>
    )
}