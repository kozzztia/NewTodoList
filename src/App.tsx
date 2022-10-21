import React, {useEffect, useState} from "react";
import "./App.css";
import 'antd/dist/antd.css'
import {Link, Navigate, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LoginForm from "./LoginForm/LoginForm";
import TodoPage from "./components/TodoPage";
import Todo from "./components/Todo";

export default function App():JSX.Element {
    const [isAuth , setIsAuth] = useState(false)

    return (
        <div className={"App"}>
            {/*<nav>*/}
            {/*    <Link to={"/login"}>SingIn</Link>*/}
            {/*    <Link to={"/todo_page"}>TodoPage</Link>*/}
            {/*</nav>*/}
                 <Routes >
                     <Route path={"/"} element={<MainLayout/>}/>
                     <Route  path={"/login"} element={<LoginForm />}/>
                     <Route path={"/todo_page"} element={!isAuth?<Navigate to={"/login"} replace/>:<TodoPage/>}/>
                 </Routes>
            <button
                onClick={()=>{
                    setIsAuth(prev => !prev)
                }}
            >ok</button>
        </div>
    );
}





