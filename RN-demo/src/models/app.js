import { createAction, NavigationActions, Storage } from '../util/utils'
import * as authService from '../service/auth'

export default {
    namespace:'app',
    state:{
        login:'login',
        loading:false,
        fetching:false
    },
    reducers:{
        updateState(state,{payload}){
            const newState = Object.assign({},state)
            console.log('payload', payload)
            console.log('newState', newState)
            newState.login = payload.login
            return newState
        }
    },
    effects:{
        *login({payload},{call,put}){
            yield put(createAction('updateState')({...payload}))
            Storage.set('login', payload?.login)
        }
    }
}