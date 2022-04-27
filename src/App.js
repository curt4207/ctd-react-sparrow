import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './todoListItem';




const title = "Todo List";


const App = () => {
  // const [newTodo, setNewTodo] = React.useState();
  const [todoList, setTodoList] = React.useState([]);

 console.log(todoList)
 
    function addTodo(newTodo) {
      setTodoList([...todoList, newTodo]);
    }

  return (
    <div>
      <h1>{title}</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {/* Pass `setNewTodo` as a callback handler prop named `onAddTodo` to the `AddTodoForm` component */}
      <p>{}</p>
      <TodoList todoList={todoList} />
      <Search/>
    

    <hr/>
    
    </div>
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
