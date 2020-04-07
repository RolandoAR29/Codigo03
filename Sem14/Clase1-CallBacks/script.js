//CallBack
// Es la referencia a una función que pasa como argumento

function validarDatos(id, nombre, callBack){
    /*
    *1. Se ejecuta la función
    *2. Se reciben los parámetros
    *3. Ejecutar CONSOLE.LOG con los 2 primeros parámetros ingresados
    *4. Ejecuta la función CALLBACK la cual hace ejecución del parámetro FUNTION();
    */
    console.log('El campo ' + id + ' tiene el nombre de ' + nombre);
    callBack();
}

validarDatos(2, 'Fabio', function(){
    console.log('Datos correctos. Vamos a Brazil!');
});

/* ------------------------------------------------------------------ */

const setearDatos = data => {
    contenedor.textContent = data;
}

/*'traducción' de función SETEARDATOS*/
/*
* const = function setearDatos(data) {
*   contenedor.textContent = data;
* }
*/

const traerDatos = callBack => {
    setearDatos('Solicitanto autorización'); // ejecuta función para mostrar en pantalla
    setTimeout(() => { //Ejecuta "callBack" en 1000ms(1s)
        callBack(true)
    }, 1000);
}

/*Función que ingresa como parámetro en TRAERDATOS*/
/*
autorizacion => { 
    if(autorizacion) {
        mostrarDatos(usuario => {
            setearDatos('Bienvenido ' + usuario.nombre)
        })
    }
}
*/

/*'traducción' de función TRAERDATOS*/
/*
const traerDatos(callBack) {
   setearDatos('Solicitanto autorización');
   setTimeout(() => {
        callBack(true);
   }, 1000);
}
*/

const mostrarDatos = callBack => {
    setearDatos('Esperando a mostrar la información'); // ejecuta función para mostrar en pantalla
    setTimeout(() => {
        callBack({nombre: 'Nando'});
    }, 1000);
}

/*Función que ingresa como parámetro en MOSTRARDATOS*/
/*
usuario => {
    setearDatos('Bienvenido ' + usuario.nombre) // ejecuta función para mostrar en pantalla
}
*/

/*'traducción' de función MOSTRARDATOS*/
/*
cont mostrarDatos(callBack){
    Instrucción 1 ->
        setearDatos('Esperando a mostrar la información'); // console.log('Esperando a mostrar la información');
    Instrucción 2 ->
        //setTimeout(instrucciones, tiempo) -> Ejecutar instrucciones (una función) dentro de un determinado tiempo
        setTimeout(() => { // invocar a funcion setTimeout
            callBack({nombre: 'Nando'}); // ejecutar parámetro callBack con el parámetro de tipo objeto { nombre : 'Nando' }
        }, 1000); // Tiempo de espera
}
*/

btn.addEventListener('click', () => {   // acción que se genera cuando se da click en botón
    traerDatos(autorizacion => {    //ejecutar función "traerDatos" -> traerDatos(autorizacion => { if(autorizacion) { mostrarDatos(usuario => { setearDatos('Bienvenido ' + usuario.nombre) }) } })
        if(autorizacion) {
            mostrarDatos(usuario => {
                setearDatos('Bienvenido ' + usuario.nombre)
            })
        } else {
            setearDatos('No se pudo acceder a la Base Datos de virus :c')
        }
    })
})