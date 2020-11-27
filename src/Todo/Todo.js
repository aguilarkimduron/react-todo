import React from 'react';
export default function Todo(props) {
    const { todo, deleteTodo } = props;
    return (
        <>
        <li className="collection-item">{todo.description}<i onClick={() => {deleteTodo(todo.id)}} className="material-icons secondary-content">delete</i></li>
        </>
    )
}
