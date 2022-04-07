import React from "react";
import TodoList from "./TodoList";

function TodoListItem(props) {
    return(
        <li key={props.todo.id}>
              <span> {props.todo.title}</span>
        </li>
    )
}

export default TodoListItem; 