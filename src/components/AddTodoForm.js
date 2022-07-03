import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";
import { motion } from "framer-motion";
import {PropTypes} from "prop-types";

const AddTodoForm = (props) => {
    const {onAddTodo, } = props;
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
            // {title: todoTitle, id: Date.now()}
            {
                id: Date.now(),
                fields: {
                    Title: todoTitle
                }
            }    
        );   
    };
    
    return(
        <React.Fragment>
        <form onSubmit={handleAddTodo} className={style.title}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title </InputWithLabel>
        
        <motion.button 
        type="submit" 
        className={style.addButton}
        whileHover={{
            scale: 1.2
        }}>Add</motion.button>
        </form>
        </React.Fragment> 
    )
   
};

// define the `propTypes` property of AddTodoForm function as a new object
// Inside the object, define a property with key `onAddTodo` (prop name) and value `PropTypes.func` (function data type)

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};

export default AddTodoForm;