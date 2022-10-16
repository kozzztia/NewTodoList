import React from 'react';
import {NavLink, useParams} from "react-router-dom";


const Todo = () => {
    const param = useParams()
    return (
        <div>
           page number: {param.id}
            <NavLink to={"/todo_page"}>TodoPage</NavLink>
        </div>
    );
};

export default Todo;
