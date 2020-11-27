import React, { useState }from 'react';
export default function NewTodo(props) {
    const { addTodo } = props;
    const [newTodo, setNewTodo] = useState({
        id: null,
        description: null
    });
    const handleChange = (e) => {
        const desc = e.target.value;
        setNewTodo({id: Math.random(), description: desc});
    }
    const handleSubmit = (e) => {
        document.querySelector('form').reset();
        e.preventDefault();
        addTodo(newTodo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input type="text" name="todo" id="todo" onChange={handleChange}/>
                <label for="todo">New Todo</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit">Submit</button>
        </form>
    )
}
