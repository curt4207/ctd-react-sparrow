import React from 'react';
import TodoListItem from './TodoListItem';
import {PropTypes} from "prop-types";

function TodoList(props){
    const {todoList,onRemoveTodo} = props;
    
    return(
      <ul>
      {todoList.map(function (todo){
          return (
           <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>

          )
      })}
      </ul>
    )
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
};

export default TodoList;