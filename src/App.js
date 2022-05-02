import {useEffect, useState} from 'react';
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './todoListItem';





const title = "Todo List";

function useSemiPersistentState () {
  // First you're getting the "savedTodoList" data from localStorage.
  // Then you're parsing that data (which is a JSON string)
  // Then you're passing the parsed data as the first argument to `useState`, which gives the state its default value (what `todoList` starts as)
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")));

  console.log(todoList);
  
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  },[todoList]);
  return [todoList, setTodoList];
};

const App = () => {
  
  const [todoList, setTodoList] = useSemiPersistentState();
  

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
    }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {/* Pass `setNewTodo` as a callback handler prop named `onAddTodo` to the `AddTodoForm` component */}
      <p>{}</p>
      <TodoList todoList={todoList} />
      <Search/>
    

    <hr/>
    
    </React.Fragment>
   );
  
  }

const Search = () => {
    const handleChange = (event) => {
    console.log(event.target.value);
  };

  return(
    <div>
      <label htmlFor="search ">Search:</label>
      <input id="search" type="text" onChange={handleChange}></input>
    </div>
  )
}



export default App;
