import React from 'react';
import { shallow } from 'enzyme'; 
import { AddCategory } from "../../components/AddCategory";

import '@testing-library/jest-dom'; // no es obligatorio

describe('Pruebas en <AddCategory />', () => {
    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();        
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo' 
        input.simulate('change', {
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';

        // 1. Simular el input change
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setcategories debe ser llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

        // 4. el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
        
})
