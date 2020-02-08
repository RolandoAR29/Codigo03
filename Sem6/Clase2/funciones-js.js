function ver(variable){
    console.log(variable);
}

/*---------------FUNCIONES DE JS---------------------*/
//Funciones de cadenas
ver('--FUNCIONES JS--');
var ca = "holaLoco";
var cb = "mundo"
ver(ca.length) //tamaño de cadena
ver(ca.concat(cb)); // concatenar cadenas
ver(ca.toUpperCase()); // a mayúsculas
ver(ca.charAt(0)); //caracter en esa posición
ver(ca.indexOf('o')); //si el caracter existe en la cadena, devuelve la posición
ver(ca.lastIndexOf('o')); //la última ocurrencia en la cadena
ver(ca.substring(-2)); //Devuelve toda la cadena si asignamos un negativo
ver(ca.substring(3, 6)); //Devuelve subcadena entre el intervalo denotado
ver(ca.split("")); //Separar en subcadenas, de acuerdo al valor ingresado

/*----FUNCIONES----*/
//Función sin parámetros y sin valor de retorno
function nombre(){
    ver('hola');
}
//Función con parámetros y sin valor de retorno
function nombre1(a){
    ver(a);
}
//Función sin parámetros y con valor de retorno
function nombre2(){
    var a = 0;
    a++;
    return a;
}
//Función con parámetros y con valor de retorno
function nombre3(a, b){
    return a + b;
}
nombre();
nombre1('hola');
var res = nombre2();
ver(res);
var res1 = nombre3(1,2)
ver(res1);

//Funciones de arreglos
var arreglo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
ver(arreglo.length); // calcular la cantidad de datos de un arreglo
ver(arreglo.concat('23')); // concatenar elementos al arreglo 
ver(arreglo.join('')); //unir los elementos de un arreglo
ver(arreglo.push('a')); //agregar un elemento al final del arreglo
ver(arreglo);
ver(arreglo.pop()); //quitar elemento final de un arreglo
ver(arreglo);
ver(arreglo.shift()); //remueve el primer elemento de un arreglo
ver(arreglo);
ver(arreglo.reverse()); //invierte las posiciones de un arreglo

//Funciones para números
var div = 2/0;
ver(isFinite(div)); //determinar si el resultado es infinito
div = 2/'a';
ver(isNaN(div)); // determinar si es un Not a Number
div = 2.233466576656454;
ver(div.toFixed(3)); // Devolver la cantidad de decimales indicada

//Ámbito de las variables
let a = 10;
let result;
const UIT = 22;
function suma(a,b){
    //debugger; // ->  
    let result;
    result = a + b;
    return result;
}
CON = suma(a,a)
ver(suma(a,a)); //20
ver(suma(a,result)); //
ver(CON);