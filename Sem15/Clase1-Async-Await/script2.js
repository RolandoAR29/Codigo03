/*
Async / await
Permite manipular que la ejecución de código sea de manera síncrona (secuencial).
*/
const setearDatos = data => {
    contenedor.textContent = data;
}

const traerDatos = () => {
    return new Promise((resolve, reject) => {
        setearDatos('Solicitanto autorización'); 
        setTimeout(() => { 
            resolve(true);
        }, 1000);
    })
}

const mostrarDatos = () => {
    return new Promise((resolve, reject) => {
        setearDatos('Esperando a mostrar la información'); 
        setTimeout(() => {
            resolve({nombre: 'Nando'});
        }, 1000);
    });
}

btn.addEventListener('click', async () => {
    let user = null;
    const autorizacion = await traerDatos();
    if(autorizacion) {
        usuario = await mostrarDatos();
    }    
    setearDatos('Bienvenido ' + usuario.nombre)
})

/*Estructura básica Async/Await
*********************************
const validar = async () =>{
    console.log('bla bla');
    await tuPromesa()
}
*/


const asyncH = async () => {
    const res = await promiseH();
    //console.log(res);
    return 'hola';
}

const promiseH = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Holas');
    }, 5000);
});

promiseH().
then(ressult => console.log(ressult));

asyncH().
then(ressult => console.log(ressult));