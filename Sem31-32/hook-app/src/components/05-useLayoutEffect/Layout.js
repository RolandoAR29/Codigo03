import React, { useLayoutEffect, useRef, useState } from 'react';
// import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';
import { useFetchRealRef } from '../../hooks/useFetchRealRef';

export const Layout = () => {

    const { counter, increment} = useCounter(1);

    // Para ejemplo de RealExampleRef
    const { data } = useFetchRealRef(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        // console.log(pTag.current.getBoundingClientRect() );
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h2>LayoutEffect</h2>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={ pTag }
                >{ quote }</p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>
    )
}
