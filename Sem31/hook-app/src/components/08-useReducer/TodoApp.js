import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { descripcion }, handleInputChange, reset ] = useForm({
        descripcion: ''
    });

    useEffect(() => {
        console.log('estoy guardando', todos)
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(descripcion.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);

        reset();
    }

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p
                                        className={ `${ todo.done && 'complete' }` }
                                        onClick={ () => handleToggle(todo.id) }
                                    >
                                        {i + 1}. {todo.desc}
                                    </p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={ () => handleDelete(todo.id) }
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h3>Agregar TODO</h3>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ descripcion }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 btn-block"
                        >
                            Agregar
                       </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
