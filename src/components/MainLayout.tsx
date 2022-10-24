import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div style = {{border:"1px solid red"}}>
            <h2>Todo App</h2>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
