import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';

// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector('#root');

// document.body.append(saludo);

// ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku"/> , divRoot);

ReactDOM.render( <CounterApp/> , divRoot);