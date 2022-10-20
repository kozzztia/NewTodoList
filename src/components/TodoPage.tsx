import React from 'react';
import {NavLink, Outlet, Route , Navigate} from "react-router-dom";

type isAuthType = {
    isAuth : boolean
}
const TodoPage = ({isAuth}:isAuthType) => {
    if (isAuth)
        return <Navigate to="/login" />
    return (
        <div>
            <NavLink to={"todo_page/1"}>TodoPage</NavLink>
            <NavLink to={"todo_page/2"}>TodoPage</NavLink>
            <NavLink to={"todo_page/3"}>TodoPage</NavLink>
            <NavLink to={"todo_page/4"}>TodoPage</NavLink>
            <NavLink to={"todo_page/5"}>TodoPage</NavLink>
        <Outlet/>
        </div>
    );
};

export default TodoPage;
