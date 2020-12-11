import React from 'react';

export interface Iprops {
    value: number,
    number?: number,
    onIncreament:()=>void,
    onDecreament:()=>void,
}

const Counter = ({ value, number,onIncreament, onDecreament}: Iprops) => {
    return (
        <>
            <p>Click:{value}次</p>
            <p>number:{number?number:'没有number'}</p>
            <div>
                <button style={{marginRight:10}} onClick={onIncreament}>+++++</button>
                <button onClick={onDecreament}>-----</button>
            </div>
        </>
    )
}

export default Counter