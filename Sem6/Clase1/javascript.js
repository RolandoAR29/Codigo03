function ver(variable){
    console.log(variable);
}

/*-------------VARIABLES---------------------*/
//var numéricas
var num1 = 1; //entero
var num2 = 2.45; //decimales
var num3 = 12.7654321456765434231435686342355684632554754635 // 
ver(num3);

//var cadenas de texto
var cad1 = "Hola Ly";
var cad2 = 'hola mundo';
var cad3 = "hola 'Ly' mundo";
ver(cad3);

//var arrays
var array1 = ["hola", "Ly",4, 5];
var array2 = [array1, '2' , 2]
var array11 = array1[0];
ver(array2);

//var booleanos
var verdadero = true; //valor = 1
var falso = false;//valor = 0
ver(verdadero);

/*-------------OPERADORES---------------------*/
//Asignación
var a = 2;
a = 'hola';
a = false
ver(a);

//Incremento y decremento
var b = 15;
ver(++b); // 16 -- operadores adelante - incrementa al inicio
ver(b); //16
ver(b++); // 16 -- operadores detrás - incrementa luego de ejecutada la línea
ver(b);

var c = 10;
ver(c--); // 10
ver(--c); // 8
ver(c);  // 8
ver(c--); // 8 
ver(c); // 7

//lógicos
//negador
var l = false;
ver(!l); // ! - negador
//AND - OR
ver(l && !1) // && - AND
ver(!l || !1) // || - OR
//Matemáticos
var mat1 = 40
var mat = 10;
mat1 %= mat; //mat1 = mat + mat1;
ver(mat1);
//relacionales
ver('---');
var m1 = '10';
var m = 10;
var rel = m !== m1;
ver(rel);
var rel2 = m + m1*1;
ver(rel2);
ver('---');
ver(typeof(parseInt(m1)));
ver(typeof(m1));
ver(typeof(m1*1));
ver(typeof(m1));

//Condicionales
ver('--CONDICIONALES--');
//IF
var if1 = '10';
var if2 = 0;
var bandera = true
if(if2) {//if(true)
    ver("hola");
    ver("mundo");
} else if (if2 > 5){
    ver("adiós");
    ver("mundo");
} else {
    ver("adiós");
    ver("Ly");
}
switch(if2){
    case 1: ver("Hola");
            break;
    case  0: ver("Bye");
            break;
    default: ver("la la");
            break;
}

(if1 == 10) ? ver('holaaaa') : ver('adiós');
// (CONDICIÓN) ? SI LA CONDICIÓN ES VERDADERA : SI LA CONDICIÓN ES FALSA

//FOR
var array1 = [1,2,3,4,5,6,7,8,9,10];
var i = 0;
// for(var i = 0; i < array1.length; i++){
//     ver(array1[i]);
// }
// for(i in array1){
//     ver(array1[i]);
// }
// while(i < array1.length){
//     ver(array1[i]);
//     i++;
// }
do{
    ver('hola ' + array1[i]);
    i++;
} while(i < array1.length);

/*---------------FUNCIONES DE JS---------------------*/
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