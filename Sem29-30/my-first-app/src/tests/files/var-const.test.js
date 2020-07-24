import '@testing-library/jest-dom';
const { saludoHeroe, getUser, getUsuarioActivo, retornaArreglo } = require("../../files/var-const");

describe('Pruebas en el archivo var-const.js', () => {
    
    test('saludoHeroe debe retornar hello world AVENGER', () => {
        const avenger = 'Hulk';

        const saludo = saludoHeroe(avenger);
        // console.log(saludo);

        expect( saludo ).toBe('hello world ' + avenger);
    })

    test('saludoHeroe debe de retornar hello world Thor si no hay avenger', () => {
        const saludo = saludoHeroe();
        expect(saludo).toBe('hello world Thor');
    })

    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'hola123',
            username: 'ADMIN'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe retornar un objeto ', () => {
        const name = 'ADMIN';

        const user = getUsuarioActivo(name);

        // console.log(user);

        expect(user).toEqual({
            uid: 'hola123',
            username: name
        });
    })

    test('debe retornar un string y un número', () => {
        const [ letras, numeros ] = retornaArreglo();

        console.log(typeof letras);

        // expect(arr).toEqual(['ABC', 123])
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
    
    
    
    
});