const { getArtistaByNombreAsync } = require("../../files/promesa");
const { default: artistas } = require("../data/artistas");

describe('Pruebas con promesas', () => {
    test('getArtistaByNombreAsyn debe retornar un artista async ', (done) => {
        const nombre = 'KISS';

        getArtistaByNombreAsync(nombre)
            .then( artista => {
                expect(artista).toBe(artistas[1])
                done();
            });
    });

    test('getArtistaByNombreAsyn debe retornar un error si no existe ', (done) => {
        const nombre = 'BON JOVI';

        getArtistaByNombreAsync(nombre)
            .catch(error => {
                expect(error).toBe('No encontrado');
                done();
            })
    });    
})