import React, { useState, useCallback } from 'react';
import '../01-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( () => {
        setCounter(c => c + 1);
    }, [setCounter]);
    
    return (
        <div>
            <h1>useCallBack Hook: { counter }</h1>

            <ShowIncrement increment={ increment } />
        </div>
    )
}
