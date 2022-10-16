import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const TodoPage = () => {
    return (
        <div>
            <NavLink to={"/todo_page/1"}>TodoPage</NavLink>
            <NavLink to={"/todo_page/2"}>TodoPage</NavLink>
            <NavLink to={"/todo_page/3"}>TodoPage</NavLink>
            <NavLink to={"/todo_page/4"}>TodoPage</NavLink>
            <NavLink to={"/todo_page/5"}>TodoPage</NavLink>
            <Outlet/>
        </div>
    );
};

export default TodoPage;
