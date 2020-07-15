import '@testing-library/jest-dom';
const { saludoHeroe } = require("../../files/var-const");

describe('Pruebas en el archivo var-const.js', () => {
    
    test('saludoHeroe debe retornar hello world AVENGER', () => {
        const avenger = 'Hulk';

        const saludo = saludoHeroe(avenger);
        console.log(saludo);

        expect( saludo ).toBe('hello world ' + avenger);
    })

    test('saludoHeroe debe de retornar hello world Thor si no hay avenger', () => {
        const saludo = saludoHeroe();
        expect(saludo).toBe('hello world Thor');
    })
    
    
});