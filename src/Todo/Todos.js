import React, { useState } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
export default function Todos() {
    const [todos, setTodos] = useState([
        {id: 1, description: 'Learn React'},
        {id: 2, description: 'Learn Vue'},
        {id: 3, description: 'Learn Angular'}
    ]);
    const deleteTodo = (id) => {
        let filteredTodo = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodo);
    }
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleTodos = () => {
        if(!todos.length) return <li className="collection-item">No Todo's left</li>
        const handledTodos = todos.map(todo => {
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
        });
        return handledTodos;
    }
    return (
        <>
        <ul className="collection">{handleTodos()}</ul>
        <NewTodo addTodo={addTodo}/>
        </>
    )
}
