const { getArtistaById, getArtistaByGenre } = require("../../files/exportaciones");
const { default: artistas } = require("../data/artistas");

describe('Pruebas en funciones de artistas', () => {

    test('debe retornar artista or id', () => {
        const nombre = 'KISS';
        const artista = getArtistaById(nombre);

        const artistaData = artistas.find(artista => artista.nombre === nombre);

        expect(artista).toEqual(artistaData); 
    });

    test('debe retornar undefined si artista no existe', () => {
        const nombre = 'BON JOVI';
        const artista = getArtistaById(nombre);

        expect(artista).toBe(undefined);
    });

    test('debe retornar un arreglo si son artistas de idioma Inglés', () => {
        const idioma = 'Inglés';
        const artista = getArtistaByGenre(idioma);

        const artistaData = artistas.filter(artista => artista.idioma === idioma)

        expect(artista).toEqual(artistaData);
    });
    
});