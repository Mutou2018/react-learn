import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionTypes"

const defaultState = {
    inputValue: '十万个为什么',
    list: ['百年孤独', '美国大城市的死与生', '诗经']
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