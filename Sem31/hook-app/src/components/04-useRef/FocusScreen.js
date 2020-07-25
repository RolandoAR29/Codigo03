import React, { useRef } from 'react';
import '../01-useEffect/effects.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                Focus
            </button>

        </>
    )
}
