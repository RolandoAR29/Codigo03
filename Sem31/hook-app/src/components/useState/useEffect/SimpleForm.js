import React, { useState, useEffect } from 'react';
import './effects.css';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        nombre: '',
        correo: ''
    });

    const { nombre, correo } = formState;

    useEffect(() => {
        console.log('Hola');
    }, []);

    // useEffect(() => {
    //     console.log('formState cambió');
    // }, [formState]);
    
    useEffect(() => {
        console.log('email cambió');
    }, [correo]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input
                    type="text"
                    name="correo"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ correo }
                    onChange={ handleInputChange }
                />
            </div>

            <p>{ nombre }</p>
            <p>{ correo }</p>
        </>
    )
}
