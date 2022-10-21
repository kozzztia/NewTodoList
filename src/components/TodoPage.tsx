import React from 'react';
import {NavLink, Outlet, Route , Navigate} from "react-router-dom";

type isAuthType = {
    isAuth : boolean
}

const numbers = [1,2,3,4,5,6,7,8]
const TodoPage = () => {
    return (
        <ul>
            {numbers.map(item => <NavLink key = {item} to={`/${item}`}>Page {item}</NavLink>)}

        <Outlet/>
        </ul>
    );
};

export default TodoPage;
