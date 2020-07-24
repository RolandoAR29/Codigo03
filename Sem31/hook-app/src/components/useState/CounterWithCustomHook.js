import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    
    const counter =  useCounter(100);
    // { state, increment, decrement, reset }
    
    return (
        <>
            <h1>Counter with Hook: { counter.state }</h1>
            <hr/>

            <button onClick={ () => counter.increment(2) } className="btn btn-primary"> +1 </button>
            <button onClick={ counter.reset } className="btn btn-info"> Reset </button>
            <button onClick={ () => counter.decrement(2) } className="btn btn-warning"> -1 </button>
        </>
    )
}
