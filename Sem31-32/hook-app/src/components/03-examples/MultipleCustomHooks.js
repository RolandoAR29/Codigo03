import React from 'react';
// import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../01-useEffect/effects.css';
import { useFetchRealRef } from '../../hooks/useFetchRealRef';

export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1);
    
    // Ejemplo inicial
    // const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // Para ejemplo de RealExampleRef
    const { loading, data } = useFetchRealRef(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];
    
    return (
        <div>
            <h2>BreakingBad Quotes</h2>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>
    )
}
