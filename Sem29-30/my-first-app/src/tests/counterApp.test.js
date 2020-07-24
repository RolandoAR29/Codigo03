import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import PropTypes from 'prop-types';



describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow( <CounterApp/>);

    beforeEach( () => {
        wrapper = shallow( <CounterApp/>);
    });

    test('debe mostrar <CounterApp> correctamente', () => {
        // const wrapper = shallow( <CounterApp/>);
        expect( wrapper ).toMatchSnapshot();

    }) 

    
    test('debe mostrar por defecto el valor 100', () => {        
        const wrapper = shallow( <CounterApp value={100}/>);
        const counterText = wrapper.find('h2').text().trim();       
        expect(counterText).toBe('100');
    })

    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('debe de decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe colocar el valor por defecto con el botón reset', () => {
        const wrapper = shallow( <CounterApp value = { 110 } />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('110')
    });
    
});