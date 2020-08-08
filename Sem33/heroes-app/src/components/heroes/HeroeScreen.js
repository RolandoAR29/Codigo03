import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({ history }) => {

    const { heroeId } =  useParams();

    const heroe = useMemo(() => getHeroesById(heroeId), [ heroeId ]);
    // const heroe = getHeroesById(heroeId);

    if( !heroe ){
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        if(history.length <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }
        history.push('/');
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={ `../assets/heroes/${ heroeId }.jpg` }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                        alt={ superhero }
                    />
                </div>
                <div className="col-8 animate__animated animate__fadeInRight">
                    <h3>{ superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego: </b> { alter_ego }</li>
                        <li className="list-group-item"> <b>Publisehr: </b> { publisher }</li>
                        <li className="list-group-item"> <b>First appareance: </b> { first_appearance }</li>
                    </ul>

                    <h5 className="mt-3"> Characters </h5>
                    <p>{ characters }</p>

                    <button
                        className="btn btn-outline-info"
                        onClick={ handleReturn }
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
