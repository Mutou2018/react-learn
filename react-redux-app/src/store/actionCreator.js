/*
  不存在分组件时
*/
/*
  修改constants内容
*/
import * as constants from './constants'
export const getData = (data) => ({
    type: constants.SET_DATA,
    data
});


/*
  存在分组件 store时，该文件删除
*/
// action 指示器