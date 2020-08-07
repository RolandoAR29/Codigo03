import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoProcesado } from '../../helpers/procesoProcesado';

import '../01-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoProcesado =  useMemo(() => procesoProcesado(counter), [ counter ])

    return (
        <div>
            <h1>MemoHook - Counter <small>{ counter }</small></h1>
            <hr/>

            <p>{ memoProcesoProcesado }</p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>

        </div>
    )
}
