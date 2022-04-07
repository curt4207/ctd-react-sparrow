import React from 'react';
import TodoListItem from './todoListItem';

const todoList = [
    {
    id: 1,
    title: "What to Cook",
    objectID: 0,
    },
    {
      id: 2,
      title:"Homework Assignment",
      objectID: 1,
    },
    {
      id: 3,
      title:"Hobbies and Activity's",
      objectID: 2,
    }
  ];

function TodoList(){
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