// import React, { useState, useEffect } from 'react';
import React from 'react';
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';

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
            <h3>{ category }</h3>
            { loading && <p>Cargando...</p> }
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