/**
 * export default -> Exportamos una clase en general
 * module.exports -> Exportamos module en específico
 */

export default class Persona {
    constructor (nombre) {
        this.nombre = nombre; // this.nombre -> Es el atributo de la clase / nombre -> Es el valor que es tomado desde el parámetro de entrada 
    }

    saluda () {
        alert(`Hola yo soy ${this.nombre}`); // sintaxis ES6 para concatenar variables
        //alert('Hola yo soy' + this.nombre);
    }
}