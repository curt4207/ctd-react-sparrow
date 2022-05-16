import React from "react";
import { useEffect, useRef } from "react";

function InputWithLabel (props) {

const inputRef = useRef(0);

    useEffect(() =>{
      inputRef.current.focus();
    },[]);

return(
    <label htmlFor="todoTitle"> {props.children}
    <input id="todoTitle" ref={inputRef} value={props.todoTitle} name="title" onChange={props.handleTitleChange} />
    </label>
)
};


export default InputWithLabel;