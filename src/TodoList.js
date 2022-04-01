import React from 'react';

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
                <li key={todo.id}>{todo.id}
                <span>: {todo.title}</span>
                    </li>
            )
        })}
        </ul>
    )
};

export default TodoList;