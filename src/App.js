import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
const title = "Todo List";



function App() {

  return (
    <div>
      <h1>{title}</h1>
      <AddTodoForm/>
    <TodoList/>
    <Search/>

    <hr/>
    
    </div>
   );
  
  }



function Search() {
  return(
    <div>
      <label htmlFor="search ">Search:</label>
    <input id="search" type="text"></input>
    </div>
  )
}

export default App;
