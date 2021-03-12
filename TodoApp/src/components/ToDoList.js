import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos, filteredToDos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map((todo) => (
                    <ToDo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
