import React from "react";

const AddTodoForm = (props) => {
    const {onAddTodo,} = props;
    const [todoTitle, setTodoTitle] = React.useState("");    

    const handleTitleChange = (event) => {
       const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        
        setTodoTitle("");
        onAddTodo(
            {title: todoTitle, id: Date.now()}
            
        );
        
    };

    return(
        <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle"> Title:
        <input id="todoTitle" value={todoTitle} name="title" onChange={handleTitleChange}/>
        </label>
        <button type="submit">Add</button>
        </form>   
    )
};

export default AddTodoForm;