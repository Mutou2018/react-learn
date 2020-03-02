import React, { Component } from 'react'
import store from './store'
import { changeInput, addItem } from './store/actionCreators'
import { connect } from 'react-redux'
class TodoList extends Component {
    render() {
        let { inputValue, inputChange, list,addItem } = this.props
        return (
            <div>
                <div className='menu'>
                    <div>
                        <div>menu</div>
                        <div> <input value={inputValue} onChange={inputChange} /><button onClick={addItem}>增加菜单</button></div>
                        <div>
                            <ul>
                                {list.map((item, index) => {
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

const mapStatToPtops = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = changeInput(e.target.value)
            dispatch(action)
        },
        addItem() {
            const action = addItem()
            dispatch(action)
        }
    }
}

export default connect(mapStatToPtops, mapDispatchToProps)(TodoList)
