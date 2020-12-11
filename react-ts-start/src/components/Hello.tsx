import React from 'react'

// 创建类型接口
export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default function Hello({ name, enthusiasmLevel = 1,onIncrement, onDecrement}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    return (
        <div className='hello'>
            <div className='greeting'>
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    )
}
// class Hello extends React.Component<Props, object>{
//     onDecrement(){}
//     onIncrement(){}
//     render() {
//         const { name, enthusiasmLevel = 1 } = this.props;

//         if (enthusiasmLevel <= 0) {
//           throw new Error('You could be a little more enthusiastic. :D');
//         }
//         return (
//             <div className='hello'>
//                 <div className='greeting'>
//                     Hello {name + getExclamationMarks(enthusiasmLevel)}
//                 </div>
//                 <div>
//                     <button onClick={()=>this.onDecrement}>-</button>
//                     <button onClick={()=>this.onIncrement}>+</button>
//                 </div>
//             </div>
//         )
//     }
// }
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}