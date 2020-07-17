// import React from 'react';
// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
    // return (
    //     <div>
    //         <h1>Hola mundo</h1>
    //         <p>Bienvenido</p>
    //     </div>
    // );

    // return (
    //     <Fragment>
    //         <h1>Hola mundo</h1>
    //         <p>Bienvenido</p>
    //     </Fragment>
    // );
    // console.log(saludo);

    // if(!saludo){
    //     throw new Error('El saludo es necesario');
    // }

    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/* <pre> { JSON.stringify(saludo,null, 3) } </pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;