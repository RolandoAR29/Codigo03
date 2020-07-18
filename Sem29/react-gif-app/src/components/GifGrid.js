import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGif();
    }, [])

    const getGif = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=L00VzA0fO5lwJ1JRZ5hSNlRL7KcREyZw&q=Pokemon&limit=10';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id:     img.id,
                title:  img.title,
                url:    img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    // getGif();

    return (
        <div>
            <h3>{ category }</h3>
            {
                images.map( img => {
                    return <GifGridItem key={ img.id }
                                        { ...img }
                            />
                })
            }
        </div>
    )
}
