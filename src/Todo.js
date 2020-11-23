import React from "react";
import {Button} from "react-bootstrap";

export default function Todo({ todo,toggleTodo,deleteTodo }) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    function  deleteTodoClick(){
        deleteTodo(todo.id)
    }
    return (
        <div className="list-group-item list-group-item-action">
            <label className="d-flex justify-content-between align-items-center">
                <div>
                    <input type="checkbox" checked = {todo.complete} onChange={handleTodoClick} />
                    <b>{todo.name}</b>
                </div>
                <div>
                    <Button variant="danger" onClick={deleteTodoClick}>X</Button>
                </div>
            </label>
        </div>
    )
}
