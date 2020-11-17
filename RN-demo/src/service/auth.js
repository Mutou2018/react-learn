import { delay } from '../util/utils'
import Storage from '../util/DeviceStorage'
// import { fetch } from 'react-native'

export const login = async () => {
  await delay(2000)
  return true
}
export const loginUser = async (params) => {
  // console.log('fetch', fetch)
  console.log('params', params)
  const param =new FormData();
  param.append("username", params.username);
  param.append("password",  params.password);
  param.append("client_id", 'ylwz-web');
  param.append("client_secret", '123456');
  param.append("grant_type", 'password');
  return fetch('http://ylwz.demo.cddpi.com:8081/api/ylwz/user/oauth/token', {
    method: 'POST',
    headers: new Headers({
      'Content-Type':'multipart/form-data',
    }),
    body:param
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log('===responseJson', responseJson)
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
export const getClassify = async (params) => {
  // console.log('fetch', fetch)
  console.log('params', params)
  let token = await Storage.get('token')
  return fetch('http://ylwz.demo.cddpi.com:8081/api/ylwz/data/classify/classifyList', {
    method: 'GET',
    headers: new Headers({
      'Content-Type':'application/json',
      'Authorization':token
    }),
    data:JSON.stringify(params)
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log('===responseJson', responseJson)
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
