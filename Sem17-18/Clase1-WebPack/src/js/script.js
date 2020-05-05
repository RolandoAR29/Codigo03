// import Persona from './persona' // Importar Clase o archivo de tipo js

// const persona = new Persona('McClovin');
// persona.saluda();

/**
 * Con require -> obtenemos el archivo
 */
var funcion = require('./trabajador.js');

/**
 * llamar al archivo Jquery desde un archivo en mi local
 */
var $_ = require('./jquery.js');
$_('body').append('<h1>' + funcion() + '</h1>');

/**
 * llamar a jquery desde node 
 */
var $ = require('./jquery');
$('body').append('<p>' + funcion() + '</p>');

require('../css/style.scss');