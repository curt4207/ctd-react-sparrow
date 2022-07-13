import {useEffect, useState} from 'react';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { motion } from 'framer-motion';

// Imported Components
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Search from './components/Search';
import style from './App.module.css';

const title = "Todo List";
  // First you're getting the "savedTodoList" data from localStorage.
  // Then you're parsing that data (which is a JSON string)
  // Then you're passing the parsed data as the first argument to `useState`, which gives the state its default value (what `todoList` starts as)

const App = () => {
  const [todoList, setTodoList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const [reverseSort, setReverseSort] = useState(false);
  function toggleSort () {
    setReverseSort(!reverseSort);
  };
  SortTodoList(todoList);

  const [ searchTerm, setSearchTerm] = useState("");

  function SortTodoList (records) {
    records.sort((objectA, objectB) => {
      if (objectA.fields.Title < objectB.fields.Title) {
        if(reverseSort){
          return 1;
        }
        return -1;
      }
      if (objectA.fields.Title > objectB.fields.Title) {
        if(reverseSort){
          return -1;
        }
        return 1;
      }
      return 0;  
      
    })
  };

  function handleSearch (newSearchTerm) {
    setSearchTerm(newSearchTerm)
  }

  useEffect(() => {
    const promise = fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, {headers:{Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then(data => {
       SortTodoList(data.records)
        return data;
      })
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
  
  const removeTodo = (id) => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?records[]=${id}`,{
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }, method: "DELETE"})
      .then((response) => response.json())
      .then((response) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
      })
    // before: setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const addTodo = (title) => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{headers:{
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    },method:"POST", body: JSON.stringify({
      records:[{
        fields: {
          Title: title
        }
      }]
    })})
    .then((response) => response.json())
    .then((response) => {
      setTodoList([...todoList, ...response.records])
    })
    // before: setTodoList([...todoList, newTodo]);
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
  
  return (
  <BrowserRouter>
    <a href='/'className={style.homePage}>Home</a>
    <a href='/todoList' className={style.todoListPage}>Todo list</a>
    <Routes>
      <Route path="/" element={
       <div></div>
      } /> 
      <Route  path="/todoList" exact element={
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
          <Search onSearch={handleSearch} toggleSort={toggleSort} />
        </motion.div>

        <AddTodoForm onAddTodo={addTodo}/>

        {isLoading ?<p> "Loading... "</p> : (<TodoList todoList={todoList.filter((todoListItem) => {
          return todoListItem.fields.Title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        })} onRemoveTodo={removeTodo}/>)}
          
        </React.Fragment>  
      } />
    </Routes>
  </BrowserRouter>
  
   ); 
  };

export default App;
