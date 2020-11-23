import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import NaviBar from "./Components/Navibar"

const LOCAL_STORAGE_KET = 'todoApp.todos';

function App() {
  const [todos, setTodos] =  useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KET))
      if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KET, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
  }

  function deleteTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.filter((todo) => todo.id !== id)
      setTodos(todo);
        console.log(newTodos)
        console.log(todo)
  }

  function handleClearTodos() {
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
  }

  function handleAddTodo(e) {
      const name = todoNameRef.current.value;
      if(name === '') return;
      setTodos(prevTodos => {
          return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
      })
      todoNameRef.current.value = null;

  }

  return (
    <>
        <NaviBar></NaviBar>
        <div className="container pt-5">
            <div className="row">
                <div className="col-12">
                    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                </div>
            </div>
            <input ref={todoNameRef} type="text" />
            <Button variant="primary" onClick={handleAddTodo}>Add todo</Button>
            <Button variant="warning" onClick={handleClearTodos}>Clear Complete</Button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </div>

    </>
  );
}

export default App;
