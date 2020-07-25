import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    /* Counter inicial */
    // const increment = ( factor = 1 ) => {
    //     setState( state + factor );
    // }

    // const decrement = ( factor = 1 ) => {
    //     setState( state - factor );
    // }

    const reset = () => {
        setCounter(initialState);
    }

    /* Counter con Fetch */
    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        // state,
        counter,
        increment,
        decrement,
        reset
    }
}
