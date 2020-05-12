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
            listaTareas.innerHTML += `<div class="alert alert-danger" role="alert">
                <span class="material-icons float-left mr-2">
                    assignment
                </span>
                <b>${ element.tarea }</b> - ${ element.estado }
                <span class="material-icons float-right">
                    delete
                </span>
                <span class="material-icons float-right">
                    done
                </span>
            </div>` 
        });
    }
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

    console.log(e);
})