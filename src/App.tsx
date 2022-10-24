import React, {FC, ReactChildren, useEffect, useState} from "react";
import "./App.css";
import 'antd/dist/antd.css'
import {Link, Navigate, Outlet, Route, RouterProvider, Routes, useNavigate} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import Page from "./components/Page";



export default function App(){
    const [isAuth , setIsAuth] = useState(false)

        return (
            <div className={"App"}>
                <nav>
                    <Link to={"/login"}>login</Link>
                    <Link to={"/main"}>main</Link>
                    <Outlet/>
                </nav>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route index element={isAuth&&<Navigate to={"/login"} replace/>}/>
                        <Route path={"login"} element={<LoginPage/>}/>
                        <Route path={"main"} element={<MainPage/>}/>
                    </Route>
                </Routes>
            </div>
        );
    }






