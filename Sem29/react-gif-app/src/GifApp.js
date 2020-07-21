import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => {
                        // return <li key={ category }> { category }</li>
                        return <GifGrid key={ category }
                                    category={ category } />
                    })
                }
            </ol>
        </>
    )
}
