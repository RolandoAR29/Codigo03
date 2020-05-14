const formulario = document.getElementById('formulario');
const listaTareas = document.getElementById('listaTareas');

let arrayTareas = [];

const crearTarea = (tarea) => {
    let item = {
        tarea: tarea,
        estado: false
    }
    arrayTareas.push(item);

    return item;
}

const guardarLocalStorage = () => {
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    leerLocalStorage();
}

const leerLocalStorage = () => {
    listaTareas.innerHTML = '';
    arrayTareas = JSON.parse(localStorage.getItem('tareas'));

    if(arrayTareas === null){
        arrayTareas = [];
    } else {
        arrayTareas.forEach(element => {
            if(element.estado){
                listaTareas.innerHTML += `<div class="alert alert-success" role="alert">
                    <span class="material-icons float-left mr-2">assignment</span>
                    <b>${ element.tarea }</b> - ${ element.estado }
                    <span class="material-icons float-right">delete</span>
                    <span class="material-icons float-right">done</span>
                </div>` 
            } else {
                listaTareas.innerHTML += `<div class="alert alert-danger" role="alert">
                    <span class="material-icons float-left mr-2">assignment</span>
                    <b>${ element.tarea }</b> - ${ element.estado }
                    <span class="material-icons float-right">delete</span>
                    <span class="material-icons float-right">done</span>
                </div>`
            }
        });
    }
}

const eliminarDeLocalStorage = (tarea) => {
    let indiceArreglo;

    arrayTareas.forEach((element, index) => {
        if(element.tarea === tarea){
            indiceArreglo = index;
        }
    });

    arrayTareas.splice(indiceArreglo, 1);
    guardarLocalStorage();
}

const editarDeLocalStorage = (tarea) => {
    let indexArray = arrayTareas.findIndex((element) => element.tarea === tarea);
    // (element) => {
    //     return element.tarea === tarea
    // }
    arrayTareas[indexArray].estado = true;
    guardarLocalStorage();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let tarea = document.getElementById('tarea').value;

    crearTarea(tarea);
    guardarLocalStorage();

    document.getElementById('tarea').value = '';
});

document.addEventListener('DOMContentLoaded', leerLocalStorage);

listaTareas.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let nombreTarea = e.path[1].childNodes[3].innerHTML;
        if(e.target.innerHTML === 'done'){
            editarDeLocalStorage(nombreTarea);
        }
        if(e.target.innerHTML === 'delete'){
            eliminarDeLocalStorage(nombreTarea);
        }
    }
})