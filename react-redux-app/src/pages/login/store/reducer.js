import * as constants from './constants'
// import { fromJS } from 'immutable'
const defaultState = ({
    myData: 'test'
})
/*
  用fromJS方法，把原始的JS类型转化为immutable类型
*/
// const defaultState = fromJS({
//     myData: null
// })

const setData = (state, action) => {
    // return state.set('myData', action.data)
    let newData = JSON.parse(JSON.stringify(state))
    newData.myData = action.data
    return newData
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SET_DATA:
            return setData(state, action)
        default:
            return state
    }
}