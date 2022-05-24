import React from "react";
import TodoList from "./TodoList";

const TodoListItem = (props) => {
    const {todo} = props;
    return(
        <li key={todo.id}>
        <span> {todo.fields.Title}</span>
        <button type="button" onClick={()=>{props.onRemoveTodo(todo.id)}}>Remove</button>
        </li>
    )
};

export default TodoListItem; 