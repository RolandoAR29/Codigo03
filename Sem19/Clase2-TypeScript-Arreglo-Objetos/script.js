"use strict";
(function () {
    var powerRanger = {
        nombre: 'Sergio',
        clave: 'Chanclas',
        poder: 'Rayo láser'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        //const { nombre, clave } = powerRanger;
        console.log(nombre);
        console.log(poder);
        // console.log(powerRanger.poder);
    };
    //extraer(powerRanger);
    var vengadores = ['IronMan', 'Thor', 'Capitán América'];
    // const [ , , steve ] = vengadores;
    var extraerArray = function (_a) {
        var tony = _a[0], odinson = _a[1], steve = _a[2];
        console.log(tony);
        console.log(odinson);
        console.log(steve);
    };
    extraerArray(vengadores);
})();
