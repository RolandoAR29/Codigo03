// ********************  Variables & Constantes
const name = 'Ronaldo';
let apellido = "PokeROnaldo";
apellido = "Hello"


if (true) {
    let apellido = "Pequeño Small";
    console.log(apellido, name);

}

console.log(apellido);

// ********************  Cadenas
const avenger = 'Spiderman';
const comic = "Batman";
console.log(avenger + comic);
const avengerComic = `${comic}  ${avenger}`;
console.log(avengerComic);

function heroe(avenger) {
    return "HEllo World" + avenger;

}

console.log(`dice: ${heroe(avenger)}`);


// ******************** Objeto Literales

const persona = {
    nombre: 'Juan',
    apellido: 'Alvarez',
    edad: 45,
    direccion: {
        ciudad: 'Trujillo',
        lat: 8.0586441,
        lng: 2.3461468
    }
};
console.log(persona);
// console.table(persona);

// Forma incorrecta de crear una variable con los mismos datos de otra
const persona2 = persona;
console.log(persona2);
persona2.nombre = 'Roberto';

console.log(persona2);
console.log(persona);

// Forma correcta
const persona3 = { ...persona }
console.log(persona3);

// ******************** Arreglos
// const arreglo = new Array(10);
const arreglo = [1, 2, 5];
const arreglo2  = [arreglo, 10];
const arreglo3  = [...arreglo, 10];
const arreglo4 = arreglo3.map(function(item){
    return item * 2;
})
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

// ******************** Desestructuración de objetos
// Asignación desestructurante

const usuario = {
    nombre: 'Pepito',
    edad: 48,
    clave: 'Admin'
}
// Crea una constante con el mismo nombre de la propiedad a la que estoy
// accediendo del objeto
const { nombre, edad, clave } = usuario

// Renombrando constante
const { nombre:nombre2 } = usuario

console.log(nombre);
console.log(nombre2);
console.log(edad);
console.log(clave);

// const restornaUsuario = ( user ) => {
//     const { nombre, edad, clave } = user;
//     console.log(nombre, edad, clave );
// }

const retornaUsuario = ({ nombre, edad, clave }) => {
    return {
        nombreCalve: clave,
        anios: edad
    }
}
const superUsuario = retornaUsuario(usuario);
console.log(superUsuario);

// ******************** Desestructuración de arreglos
const personajes = ['Goku', 'Vegeta', 'McClovin'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

personajes.push(usuario);
console.log(personajes);
const [ , , , us] = personajes;
console.log(us)