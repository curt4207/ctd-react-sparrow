import {useEffect, useState} from 'react';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { motion } from 'framer-motion';

// Imported Components
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Search from './components/Search';
import TodoContainer from './components/TodoContainer';
import style from './App.module.css';

const title = "Todo List";
  // First you're getting the "savedTodoList" data from localStorage.
  // Then you're parsing that data (which is a JSON string)
  // Then you're passing the parsed data as the first argument to `useState`, which gives the state its default value (what `todoList` starts as)

const App = () => {
  const [todoList, setTodoList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {headers:{Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
        .then((response) => response.json()).catch((error) => console.log(error))
        .finally(() => setIsLoading(false)); 
    
    promise.then(
      (result) => {
        console.log(result);

        setTodoList(result.records)
        setIsLoading(false)
      }
    )
  },[]);

  
  useEffect(() => {
    if(isLoading === false){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  },[isLoading, todoList]);
  
  
  // Does not remove todo from the Airtable website todo list yet??? 
  const removeTodo = (id) => {
      setTodoList(todoList.filter(todo => todo.id !== id));
    };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    };

    const todoListTitleVariant = {
      hidden: {
        x: "-100vw"
      },
      visible: {
        x: 0,
        transition: {
          delay: 1.5,
          type: "spring",
          damping: 65,
          stiffness: 100
        }
      }
    };

    const searchTitleVariant = {
      hidden: {
        x: "100vw"
      },
      visible: {
        x: 0,
        transition: {
          delay: 1.5,
          type: "spring",
          damping: 65,
          stiffness: 100
        }
      }
    }; 
// Idea make (Title add) appear when Todo List and search reach center
    
          // Use react cards
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={
          <React.Fragment>   
          <motion.h1 
          className={style.todoTitle}
          variants={todoListTitleVariant}
          animate="visible"
          initial="hidden">
            {title} 
            
          </motion.h1>

          <motion.div
          variants={searchTitleVariant}
          animate="visible"
          initial="hidden">
              <Search/>
          </motion.div>
        
          <AddTodoForm onAddTodo={addTodo}/>
          {isLoading ?<p> "Loading... "</p> : (<TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)}
            
          </React.Fragment>  
        } />
        
        <Route path="/new" element={<h1>"New Todo List"</h1>} /> 
      </Routes>
    </BrowserRouter>
  
   ); 
  };

export default App;
