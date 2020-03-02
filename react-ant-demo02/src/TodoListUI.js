import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';

// 无状态组件 UI组件可以写成无状态组件，性能会更好
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '200px' }}
                    onChange={(e) => { props.changeInputValue(e) }}
                    value={props.inputValue}
                />
                <Button style={{ marginLeft: "10px" }} type='primary' onClick={() => (props.clickBtn())}>增加</Button>
            </div>
            <div style={{ marginTop: '10px', width: '200px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { props.delItem(index) }}>{item}</List.Item>)}
                >
                </List>
            </div>
        </div>
    )
}

// class TodoListUI extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '200px' }}
//                         onChange={(e) => { this.props.changeInputValue(e) }}
//                         value={this.props.inputValue}
//                     />
//                     <Button style={{ marginLeft: "10px" }} type='primary' onClick={() => (this.props.clickBtn())}>增加</Button>
//                 </div>
//                 <div style={{ marginTop: '10px', width: '200px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={() => { this.props.delItem(index) }}>{item}</List.Item>)}
//                     >
//                     </List>
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI
