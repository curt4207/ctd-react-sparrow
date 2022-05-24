import {useEffect, useState} from 'react';
import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';





const title = "Todo List";
  // First you're getting the "savedTodoList" data from localStorage.
  // Then you're parsing that data (which is a JSON string)
  // Then you're passing the parsed data as the first argument to `useState`, which gives the state its default value (what `todoList` starts as)

const App = () => {
  const [todoList, setTodoList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {

        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`)
        .then((response) => response.jason())
        .then((data) => {console.log(data);
        }).catch((error) => console.log(error))
        .finally(() => setIsLoading(false))
      }, [])
      
       
      // setTimeout(() =>{
      //   resolve({data:{todoList:JSON.parse(localStorage.getItem("savedTodoList"))}})
      // }, 2000) 
    
    promise.then(
      (result) => {
        console.log(result);
        setTodoList(result.data.todoList)
        setIsLoading(false)
      }
    )
  },[])

  console.log(todoList);
  
  useEffect(() => {
    if(isLoading === false){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  },[todoList]);
  
  
  
  const removeTodo = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id));
    };

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
    }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {/* Pass `setNewTodo` as a callback handler prop named `onAddTodo` to the `AddTodoForm` component */}
      {isLoading ?<p> "Loading..."</p> : (<TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)}
      
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


  
};


export default App;
