import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodosValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();  // prevents page refresh
        addTodo(newTodosValue);
        setOpenModal(false);   // closes the modal when form is submitted
    };

    const onCancel = (event) => {
        event.preventDefault();  // prevents page refresh
        setOpenModal(false);   // closes the modal when form is submitted
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu TODO</label>
            <textarea 
                placeholder="Escribir todo"
                value={newTodosValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button--cansel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button--add">Añadir</button>   
            </div>
            
        </form>
    );
}

export {TodoForm}