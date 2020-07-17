import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

// const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = 'Hola, soy Gokú';
    //     const { getByText } = render(<PrimeraApp saludo = { saludo } />)
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('debe mostrar el mensaje "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Gokú'; 
        const wrapper = shallow(<PrimeraApp saludo = { saludo } />)

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Gokú'; 
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp
                                    saludo = { saludo }
                                    subtitulo = { subtitulo }
                                />)

        const texto = wrapper.find('p').text();
        //document.querySelector('.dadasdas')

        expect(texto).toBe(subtitulo);
    })
})