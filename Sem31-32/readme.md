# Reducer
- Debe ser una función pura.
    - No debe tener efectos secundarios.
    - No debe de realizar tareas asíncronas.
    - No debe de llamar localStorage o sessionStorage.
    - No debe requerir más de una acción que puede tener un argumento.

- Debe retornar un estado.
- Usualmente recibe dos argumentos (initialState, acción)

- Ejm. función normal
const unaFuncion = () => {

}

- Ejm. función reducer
const todoReducer = () => {

}

const initialTodos = [{
    id: 1,
    todo: 'Hacer tareas',
    done: false,
}];

const todoReducer = (state = initialTodos, accion) => {

    return state;
}

let todos = todoReducer();
console.log(todos);

- Funcionamiento
    - State
    - Renderiza en vista
    - Acción (Agregar nuevo TODO)
    - Reducer (Agregar, editar, eliminar)



## REACT ROUTER
- Información
    https://reactrouter.com/web/guides/quick-start

- Instalación
    npm install react-router-dom