import React from 'react';
import TodoListItem from './todoListItem';


function TodoList(props){
    const {todoList} = props;
    return(
      <ul>
      {todoList.map(function (todo){
          return (
           <TodoListItem key={todo.id} todo={todo}/>

          )
      })}
      </ul>
    )
};

export default TodoList;