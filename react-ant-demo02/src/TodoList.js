import React, { Component } from 'react'
import store from './store'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreators'
// import {CHANGE_INPUT,ADD_ITEM,DELITEM} from './store/actionTypes'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        // 订阅模式
        this.storeChange = this.storeChange.bind(this)
        this.delItem = this.delItem.bind(this)
        store.subscribe(this.storeChange)
    }
    changeInputValue(e) {
        // const action = {
        //     // type action的名字
        //     type: CHANGE_INPUT,
        //     value: e.target.value,
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(
            store.getState()
        )
    }
    clickBtn() {
        // const action = {
        //     type:ADD_ITEM,
        // }
        const action = addItemAction()
        store.dispatch(action)
    }
    // 子向父传参 法一 快
    // 如果子组件未使用箭头函数 需要bind（this）// this.delItem = this.delItem.bind(this)
    delItem(index) {
        // const action = {
        //     type:DELITEM,
        //     value:list
        // }
        const action = delItemAction(index)
        store.dispatch(action)
    }
    /* 
        子向父传参 法二 慢
    */
    // delItem(index){
    //     console.log('index :', index);
    // }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputVal={() => (this.changeInputValue())}
                clickBtn={() => (this.clickBtn())}
                delItem={this.delItem}
            ></TodoListUI>
        )
    }

}

export default TodoList
