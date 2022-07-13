import React from "react";
//Imported Components 
import style from './TodoListItem.module.css';
import {PropTypes} from "prop-types";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, CardActions, createTheme,ThemeProvider, responsiveFontSizes} from '@material-ui/core';

let theme = createTheme();
theme = responsiveFontSizes(theme);
 
const TodoListItem = ({todo, onRemoveTodo}) => { 
    // List item is removed to get rid of the bullet points
    return(
        <ThemeProvider theme={theme}>
        <Card style={{width: "min-content", backgroundColor: "lightGrey"}} className={style.card} >   
        <CardContent >   
        <div
        key={todo.id} 
        className={style.listItem} >    
        
        <div className={style.cardTitle}>
            {todo.fields.Title}
        </div>
        <CardActions>
            <Typography gutterBottom>
        <motion.button 
            type="button" 
            className={style.removeButton} 
            onClick={()=>{onRemoveTodo(todo.id)}} 
            whileHover={{
                scale: 1.3
        }}> Remove 
        </motion.button>
        </Typography>
        </CardActions>
        </div>
        
        </CardContent>
        </Card>
        </ThemeProvider>
    )
};

TodoListItem.propTypes = {
    onRemoveTodo: PropTypes.func,
    todo: PropTypes.object
};

export default TodoListItem; 
