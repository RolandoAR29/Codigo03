import { useState, useEffect, useRef } from "react"

export const useFetchRealRef = ( url ) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect( () => {
        console.log('me ejecuto');
        return () => {
            console.log('me terminaron');
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null});

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                
                setTimeout( () => {
                    if(isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('setState no se llamó :c ');
                    }
                }, 4000);

            })
    }, [url]);

    return state;
}
