import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {

    const [ state, setState ] = useState({ data: null, loading: true, error: null });
    const isMonted = useRef(true);

    useEffect( () => {
        return( () => {
            isMonted.current = false;
        })
    });

    useEffect( () => {

        setState({ data: null, lading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                
                if ( isMonted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }

            });
    }, [url]);

    return state;

}