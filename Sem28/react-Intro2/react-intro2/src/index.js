// import { artistas } from './data/artistas';
// import  artist, { genero } from './data/artistas';
import { artistas,  genero } from './data/artistas';

// const getArtistaById = (nombre) => {
//     return artistas.find( (artista) => {
//         if(artista.nombre === nombre){
//             return true;
//         } else {
//             return false;
//         }
//     })
// }

console.log(genero);

const getArtistaById = (genero) => artistas.find( (artista) => artista.genero === genero );

const getArtistaByGenre = (idioma) => artistas.filter( (artista) => artista.idioma === idioma );

console.log( getArtistaById('Rock') );
console.log( getArtistaByGenre('Español') );