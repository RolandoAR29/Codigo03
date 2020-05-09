"use strict";
(function () {
    let cadena = 'Hola';
    let numero = 123;
    let booleano = false;
    let hoy = new Date();
    let cualquiera = 'Abc12'; // -> cualquier tipo de dato (Es como si no le asignaras algún tipo de dato)
    // cadena = numero; -> Error al asignar una variable de tipo de dato no esperado
    // let cualquiercosa: string | number | Date; -> podemos asignar distintos tipos de variable a una misma variable
    let cualquiercosa;
    cualquiercosa = cadena;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    let spiderman = {
        nombre: 'Peter',
        edad: 20
    };
    /* -----------------------LITERALES ------------------------ */
    //Nando Ricolás (Edad : 15)
    const nombre = 'Nando';
    const apellido = 'Ricolás';
    const edad = 15;
    // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    const salida = `${nombre} \n ${apellido} ( ${edad} )`; //    Alt Gr + } -> ``
    //console.log(salida);
    /* ---------------------- FUNCIONES Y PARÁMETROS ---------------- */
    function activar(quien, //  -> parámetro obligatio
    momento, //  -> parámetro opcional
    objeto = 'ki') {
        if (momento) {
            console.log(`${quien} activo su ${objeto} en ${momento}.`);
        }
        else {
            console.log(`${quien} activo su ${objeto}.`);
        }
    }
    //activar('Nando', 'tarde');
    /* ---------------------- FUNCIONES de FLECHA  ---------------- */
    // Función anónima asignada (almacenada) a una varible
    let miFuncion1 = function (a) {
        return a;
    };
    // Función con nombre
    function miFuncion2(a) {
        return a;
    }
    // Función anónima asignada (almacenada) a una constante
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    // Función de flecha / si solo retorna un valor dentro de su código, no es necesario usar llaves
    // const miFuncionF = a => a.toUpperCase();    ->  Función anónima, paréntesis en el parámetro
    const miFuncionF = (a) => a.toUpperCase();
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    console.log(sumarN(5, 5));
    console.log(sumarF(10, 10));
})();
