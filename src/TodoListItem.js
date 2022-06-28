import React from "react";
//Imported Components 
import style from './TodoListItem.module.css';
import { motion } from "framer-motion";
import { Card, CardContent, Typography, CardActions, createTheme,ThemeProvider, responsiveFontSizes} from '@material-ui/core';

let theme = createTheme();
theme = responsiveFontSizes(theme);
 
const TodoListItem = (props) => { 
    const {todo} = props;
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
            onClick={()=>{props.onRemoveTodo(todo.id)}} 
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

export default TodoListItem; 
