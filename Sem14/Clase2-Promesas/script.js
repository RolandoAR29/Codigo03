/*
Promise
Tiene dos parámetros, los cuales pueden adoptar cualquier nombre, usualmente son
    resolve -> Cuando la operación o instrucción es exitosa
    reject  -> Cuando la operación o instrucción no es exitosa y se maneja el error
Métdos que adopta una instancia de tipo Promise
    then    -> Para la ejecución de opración o instrucción exitosa
    catch   -> Para manejar el error en el caso la operación o instrucción no sea exitosa
*/

var a = 15;

// const p = new Promise((resolve, reject) => { // Instanciar un objeto de tipo Promise y añado sus dos parámetros
//     if(a == 17){
//         resolve('Variable es igual a 15'); // Cuando la operación es exitosa
//     } else{
//         reject('Variable no es igual a 15'); // Cuando la operación no es exitosa
//     }
// });

/*
// (res) => {
//     // INTRUCCIONES
// }
*/

// p.
// then( res => {  
//     console.log('exitoso: ' + res);
// })
// .catch( error => {
//     console.error('error: ' + error);
// })

/**************************************************************************************/

var v = 15;

// console.log('1. proceso iniciado...');

// setTimeout(() => {
//     v = v * 3 + 2;
//     console.log('2. proceso terminado...');
// }, 2000);

// console.log('3. el resultado es: ' + v);

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        v = v * 3 + 2;
        console.log('2. proceso terminado...');
        resolve(v);
    }, 2000);
});

console.log('1. proceso iniciado...');

promesa
.then( res => {
    console.log('3. el resultado es: ' + res);
});