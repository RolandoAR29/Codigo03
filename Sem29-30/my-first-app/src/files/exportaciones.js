// import { artistas } from './data/artistas';
// import  artist, { genero } from './data/artistas';
import artistas from '../tests/data/artistas'

// const getArtistaById = (nombre) => {
//     return artistas.find( (artista) => {
//         if(artista.nombre === nombre){
//             return true;
//         } else {
//             return false;
//         }
//     })
// }

// console.log(genero);

export const getArtistaById = (nombre) => artistas.find( (artista) => artista.nombre === nombre );

export const getArtistaByGenre = (idioma) => artistas.filter( (artista) => artista.idioma === idioma );

// console.log( getArtistaById('Rock') );
// console.log( getArtistaByGenre('Español') );