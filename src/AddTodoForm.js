import React from "react";

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log();
        const todoTitle = event.target.title.value;//retrieve the value of the `title` element from the event target and store it in a variable.
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
        
    };
    return(
        <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle"> Title:
        <input id="todoTitle" name="title"/>
        </label>
        <button type="submit">Add</button>
        </form>   
    )
};

export default AddTodoForm;