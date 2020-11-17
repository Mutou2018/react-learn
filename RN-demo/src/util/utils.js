export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './DeviceStorage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })