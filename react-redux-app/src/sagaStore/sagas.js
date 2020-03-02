import { takeEvery , put} from 'redux-thunk'
import { GET_MY_LIST } from './constants'
import {getListAction} from './actionCreator'
import axios from 'axios'

// 写saga的业务逻辑
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getMyList)

}

function* getMyList() {
    // axios.get('example.com').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
    // })
    const res = yield axios.get('example.com')
    const action = getListAction(res)
    yield put(action)
}

export default mySaga
