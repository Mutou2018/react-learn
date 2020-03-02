import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../components/header/store'
import { reducer as loginReducer } from '../pages/login/store'

/*
  把login和header的store引入，然后通过combineReducers合并在一起，并分别加上唯一的对象key值。
*/
const reducer = combineReducers({
    login: loginReducer,
    header: headerReducer
})

export default reducer
// reducer加工函数
