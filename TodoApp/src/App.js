import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App(props) {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [todos, status]);
  
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredToDos(todos.filter(todo => todo.completed === true))
        break;
      case "Uncompleted":
        setFilteredToDos(todos.filter(todo => todo.completed !== true))
        break;
      default:
        setFilteredToDos(todos);
        break;  
    }
  };

  const saveLocalToDos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalToDos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let toDoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(toDoLocal);
    }
  };

  return (
    <div className="ToDoApp">
      <header>
        <h1>My ToDoList App</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList 
        filteredToDos={filteredToDos}
        setTodos={setTodos} 
        todos={todos} 
      />
    </div>
  );
}

export default App;
