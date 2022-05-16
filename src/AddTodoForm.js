import React from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = (props) => {
    const {onAddTodo,} = props;
    const [todoTitle, setTodoTitle] = React.useState("");    

    const handleTitleChange = (event) => {
       const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        // event is the parent of preventDefault, preventDefault is a child of event.
        setTodoTitle("");
        onAddTodo(
            {title: todoTitle, id: Date.now()}
            
        );
        
    };
    return(
        <React.Fragment>
        <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title </InputWithLabel>
        <button type="submit">Add</button>
        </form>
        </React.Fragment> 
    )
   
};

export default AddTodoForm;