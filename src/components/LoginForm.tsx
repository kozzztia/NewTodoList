import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            loginForm
            <NavLink to={"/todo_page"}>TodoPage</NavLink>
        </div>
    );
};

export default LoginForm;
