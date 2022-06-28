import React from 'react';
import TodoListItem from './TodoListItem';
import style from "./TodoList.module.css";

import { CardContent, Typography, Button, CardsActions} from '@material-ui/core';

function TodoList(props){
    const {todoList} = props;
    return(
      <CardContent>
      <ul>
      {todoList.map(function (todo){
          return (
           <TodoListItem key={todo.id} todo={todo} onRemoveTodo={props.onRemoveTodo}/>

          )
      })}
      </ul>
      </CardContent>
    )
};

export default TodoList;