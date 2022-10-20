import React, {useEffect, useState} from "react";
import "./App.css";
import 'antd/dist/antd.css'
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LoginForm from "./LoginForm/LoginForm";
import TodoPage from "./components/TodoPage";
import Todo from "./components/Todo";

export default function App():JSX.Element {
    const [isAuth , setIsAuth] = useState(true)

    return (
        <div className={"App"}>
                 <Routes >
                     <Route path={"/"} element={<MainLayout />}>
                         <Route path={"todo_page"} element={<TodoPage isAuth ={isAuth}/>}>
                             <Route path={"todo_page/:id"} element={<Todo/>}/>
                             <Route path={"todo_page/:id"} element={<Todo/>}/>
                             <Route path={"todo_page/:id"} element={<Todo/>}/>
                             <Route path={"todo_page/:id"} element={<Todo/>}/>
                             <Route path={"todo_page/:id"} element={<Todo/>}/>
                         </Route>
                         <Route  path={"login"} element={<LoginForm
                            setIsAuth={setIsAuth}
                         />}/>

                     </Route>
                 </Routes>
        </div>
    );
}





