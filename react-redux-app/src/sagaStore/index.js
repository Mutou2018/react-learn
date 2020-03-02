import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'


const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)
sagaMiddleware.run (mySagas)

export default store