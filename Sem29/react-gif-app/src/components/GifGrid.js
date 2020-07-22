// import React, { useState, useEffect } from 'react';
import React from 'react';
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';

import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs(category);

    // // renderizar solo una vez este elemento
    // useEffect( () => {
    //     getGif(category)
    //         .then( img => setImages(img));
    // }, [category])

    // getGif();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">            
                {
                    images.map( img => {
                        return <GifGridItem key={ img.id }
                                            { ...img }
                                />
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}