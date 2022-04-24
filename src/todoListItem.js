import React from "react";
import TodoList from "./TodoList";

const TodoListItem = (props) => {
    const {todo} = props;
    return(
        
        <li key={todo.id}>
        <span> {todo.title}</span>
        </li>
    )
};

export default TodoListItem; 