import React from 'react';
import {Outlet} from "react-router-dom";
import {Divider, List} from "antd";

const MainLayout = () => {
    return (
        <List
            bordered
        >
            <Divider orientation="center" ><h2>Todo List</h2></Divider>
            <Outlet/>
            <button>quit</button>
        </List>
    );
};

export default MainLayout;
