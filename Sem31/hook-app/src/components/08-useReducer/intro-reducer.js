const initialState = [{
    id: 1,
    todo: 'Hacer tareas',
    done: false,
}];

const todoReducer = (state = initialState, accion) => {
    console.log(accion)
    if(accion?.type === 'agregar'){
        return [...state, accion.payload]
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'dormir',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);




console.log(todos);