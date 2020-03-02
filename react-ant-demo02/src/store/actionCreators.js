import {CHANGE_INPUT,ADD_ITEM,DELITEM} from './actionTypes'

export const changeInputAction = (val) => {
    return ({
        type:CHANGE_INPUT,
        val
    })
}
export const addItemAction = () => {
    return ({
        type:ADD_ITEM,
    })
}
export const delItemAction = (val) => {
    return ({
        type:DELITEM,
        val
    })
}