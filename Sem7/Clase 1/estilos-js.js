let caja = document.getElementById('caja');
let boton1 = document.getElementById('boton1');
let boton2 = document.getElementById('boton2');

let colores = [
    'green',
    'blue',
    'black',
    'red',
    'yellow'
];

let i = 0;
// let band = false;

boton1.addEventListener('click', () => {
    if(i == 0){
        i = colores.length - 1;
    } else {
        i--;
    }
    caja.style.backgroundColor = colores[i];
});

boton2.addEventListener('click', () => {
    if(i == colores.length - 1){
        i = 0;
    } else {
        i++;
    }
    caja.style.backgroundColor = colores[i];
});