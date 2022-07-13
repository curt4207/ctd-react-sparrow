import React from "react";

function AddTodoForm(){
    return(
     <form>
     <label htmlFor="todoList"> Title:
         <input id="todoList"/>
     </label>
     <button type="submit">Add</button>
     </form>   
    )
}

export default AddTodoForm;