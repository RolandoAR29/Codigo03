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

/*
* const = function setearDatos(data) {
*   contenedor.textContent = data;
* }
*/

const traerDatos = callBack => {
    setearDatos('Solicitanto autorización');
    setTimeout(() => {
        callBack(true)
    }, 1000);
}

/*
const traerDatos(callBack) {
   setearDatos('Solicitanto autorización');
   setTimeout(() => {
        callBack(true);
   }, 1000);
}
*/

const mostrarDatos = callBack => {
    setearDatos('Esperando a mostrar la información');
    setTimeout(() => {
        callBack({nombre: 'Nando'});
    }, 1000);
}

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

btn.addEventListener('click', () => {
    traerDatos(autorizacion => {
        if(autorizacion) {
            mostrarDatos(usuario => {
                setearDatos('Bienvenido ' + usuario.nombre)
            })
        }
    })
})