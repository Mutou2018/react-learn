import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionTypes"

export const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value: value
    }
}
export const addItem = (value) => {
    return {
        type: ADD_ITEM,
        value: value
    }
}
export const delItem = (value) => {
    return {
        type: DEL_ITEM,
        value: value
    }
}