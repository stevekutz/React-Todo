import React from 'react';
import './Todo.css';

const TodoHeader = (props) => {
    console.log('TodoHeader props ', props);

    return (
        <div>
            <h2 className = "header-title"> {props.header_msg} </h2>
        </div>
    )
};

export default TodoHeader;