/*
  组件没有store时
*/
// import * as constants from './constants';

// // 初始默认state
// const defaultState = {
//     myData: viod
// }

// export default (state = defaultState, action) => {
//     /*
//       由于state是引用型，不能直接修改，
//       否则是监测不到state发生变化的。
//       因此需要先复制一份进行修改，
//       然后再返回新的state。
//     */
//     let newState = Object.assign({}, state)
//     switch (action.type) {
//         case constants.SET_DATA:
//             newState.myData = action.data
//             return newState
//         default:
//             return state
//     }
// };

/*
  store在组件中时 store在components中
*/

/*
  如果不使用redux-immutable login.js myData: state.getIn(['login', 'myData']),错误
*/
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
