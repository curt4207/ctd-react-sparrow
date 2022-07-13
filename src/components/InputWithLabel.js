import React from "react";
import { useEffect, useRef } from "react";
import {PropTypes} from "prop-types"; 

const InputWithLabel = ({children, todoTitle, handleTitleChange}) => {

const inputRef = useRef(0);

    useEffect(() =>{
      inputRef.current.focus();
    },[]);

return(
    <label htmlFor="todoTitle"> {children}
    <input id="todoTitle" ref={inputRef} value={todoTitle} name="title" onChange={handleTitleChange} />
    </label>
)
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func
};

export default InputWithLabel;