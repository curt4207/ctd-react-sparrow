import React from 'react';
import TodoListItem from './TodoListItem';
import {PropTypes} from "prop-types";

function TodoList(props){
    const {todoList} = props;
    
    return(
      <ul>
      {todoList.map(function (todo){
          return (
           <TodoListItem key={todo.id} todo={todo} onRemoveTodo={props.onRemoveTodo}/>

          )
      })}
      </ul>
    )
};

TodoList.propTypes = {
  onRemoveTodo: PropTypes.func
};

export default TodoList;