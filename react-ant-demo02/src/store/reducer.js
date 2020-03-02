import {CHANGE_INPUT,ADD_ITEM,DELITEM} from './actionTypes'
/* 可以写业务逻辑 */
const defaultState = {
    inputValue: 'write something',
    list: [
        '麻辣香锅',
        '水煮肉片',
        '炒白菜',]
}
/* reducer纯函数，返回的值必须有传入的值决定 */
export default (state = defaultState, action) => {
    console.log('reducer state :', state);
    console.log('action :', action);
    // reducer里只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        console.log('action.index :', action.val);
        newState.list.splice(action.val,1)
        return newState
    }
    return state
}
