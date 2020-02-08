let boton = document.getElementById('btn-enviar');
let nombre = document.getElementById('nombre');
let sexo = document.getElementById('sexo');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let password = document.getElementById('password');
let direccion = document.getElementById('direccion');

/*-----------FORMAS DE LLAMAR A EVENTOS---------------------*/
//1. Desde html -> atributo "evento" (evento = onclick,etc.)
function miFuncion_HTML(){
    alert("Función llamada desde HTML");
}
//2. Desde la propiedad del elemento DOM
boton.onclick = function(e){
    alert("Función llamada de la Propiedad del elemento del DOM");
};
//3. Desde el EventTarget
boton.addEventListener('click', function(){
    alert("Función llamada desde el EventTarget");
});


/*-----------------EVENTOS---------------------*/
//Se ejecuta cuando ha habido una modificación sobre el elemento
/*---CHANGE / ONCHANGE---*/
nombre.addEventListener('change',() => {
    alert("Escribes sobre el campo nombre");
});
sexo.addEventListener('change', () => {
    alert("¿Te has cambiado de sexo? Ahora eres " + sexo.value);
});

/*---CHANGE / ONMOUSEOVER---*/
apellido.addEventListener('mouseover', () => {
    alert("Estás sobre el campo dirección");
});
apellido.addEventListener('mouseout', () => {
    alert("Por fin dejaste el campo dirección");
});

/*---KEYDOWN / ONKEYDOWN---*/
edad.addEventListener('keydown', () => {
    console.log("Ya se que tu edad es " + edad.value);
});
password.addEventListener('keyup', () => {
    console.log("Ya se que tu password es " + password.value);
});

/*---LOAD / ONLOAD---*/
direccion.addEventListener('load', () => {
    alert('Ya vi que recargaste la página, lo sé todo');
});

function recargar(){
    alert('Ya vi que recargaste la página, lo sé todo');
}