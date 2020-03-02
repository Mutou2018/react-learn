import React, { Component } from 'react'
import store from '../../store'
import { changeInput, addItem } from '../../store/actionCreators'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {

    }
    inputChange(e) {
        let value = e.target.value
        const action = changeInput(value)
        store.dispatch(action)
    }
    addItem() {
        const action = addItem()
        store.dispatch(action)
    }
    storeChange() {
        this.setState(
            this.state = store.getState()
        )
    }
    render() {
        return (
            <div>
                <div className='menu'>
                    <div>
                        <div>menu</div>
                        <div> <input value={this.state.inputValue} onChange={(e) => { this.inputChange(e) }} /><button onClick={() => { this.addItem() }}>增加菜单</button></div>
                        <div>
                            <ul>
                                {this.state.list.map((item, index) => {
                                    return (
                                        <li

                                            key={index + item} >
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default (Menu)
