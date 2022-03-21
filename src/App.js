import React from 'react';

const title = "Todo List";
const todoList = [
  {
  id:"Dinner",
  title: "What to Cook",
  objectID: 0,
  },
  {
    id:"School",
    title:"Homework Assignment",
    objectID: 1,
  },
  {
    id:"Self-Care",
    title:"Hobbies and Activity's",
    objectID: 2,
  }
];


function App() {

  return (
    <div>
      <h1>{title}</h1>

     <ul>
    `{todoList.map(function (todo) {
      return <li key={todo.objectID}>{todo.title}</li>;
    })}`
    </ul>
    <label htmlFor="search ">Search:</label>
    <input id="search" type="text"></input>

    </div>
   );
 
}
console.log(todoList);
export default App;
