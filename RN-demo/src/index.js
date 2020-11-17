import React from 'react'
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
import 'react-native-gesture-handler'
import { dva } from './util/dva'
const app = dva({
    initialState: {},
    models: [appModel],
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    },
})

const App = app.start(<Router />)

AppRegistry.registerComponent(appName, () => App);