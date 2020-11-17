export default {
    namespace: 'IndexPage',
    state:{
        ceshi:'测试数据'
    },
    reducers:{
        change(state,{payload}){
            return { ...state, ceshi: payload.value}
        }
    },
    effects: {
       *changeCeshi({payload},{put}){
            yield put({
                type:"change",
                payload
            })
       }
    },
}
