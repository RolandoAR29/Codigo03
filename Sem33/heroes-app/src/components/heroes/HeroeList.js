import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroeList = ({ publisher }) => {
    
    const heroeList = getHeroesByPublisher(publisher);

    return (
        <ul>
            {
                heroeList.map( heroe => (
                    <li key={ heroe.id }>
                        { heroe.superhero }
                    </li>
                ))
            }
        </ul>
    )
}
