import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionTypes"

const defaultState = {
    inputValue: '麻婆豆腐',
    list: ['水煮鱼', '麻辣烫', '红油凉皮']
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}