import React from 'react';
import TodoListItem from './TodoListItem';


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

export default TodoList;