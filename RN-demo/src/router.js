import React, { PureComponent } from 'react'
import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { NavigationActions, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers'

import HomeScreen from './pages/home'
import UserScreen from './pages/user'
import MessageScreen from './pages/message'
import LoginScreen from './pages/login'
import SplashScreen from './pages/splash'
import { connect } from './util/dva'

const Main4user = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        User: UserScreen,
        Message: MessageScreen,
    },
    {
        initialRouteName: 'Home'
    }
)

const AppNavigator = createStackNavigator(
    {
        Splash: { screen: SplashScreen, },
        Login: { screen: LoginScreen, },
        Main4user: { screen: Main4user },
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
    }
);

export const routerReducer = createNavigationReducer(AppNavigator)
export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.router);
const App = createReduxContainer(AppNavigator)
class Router extends PureComponent {
    render() {
        const { dispatch, app, router } = this.props
        return (
            <App dispatch={dispatch} state={router}></App>
        )
    }
}
const mapStateToProps = ({ app, router }) => {
    return ({ app, router })
};
export default connect(mapStateToProps)(Router)