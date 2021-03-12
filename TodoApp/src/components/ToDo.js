import React from 'react';

const ToDo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    };

    const compeleteHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        );
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={compeleteHandler} className="complete-btn">
                <i className="fas fa-check-circle"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;