import React, {useEffect, useState} from "react";
import "./App.css";
import 'antd/dist/antd.css'
import {Route, Routes, Navigate, Outlet, useNavigate} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import TodoPage from "./components/TodoPage";
import Todo from "./components/Todo";
import {state} from "./store";

export default function App() {
    const [isAuth , setIsAuth] = useState(false)
    const navigation = useNavigate()
    useEffect(()=>{
        !isAuth?navigation('./login'):navigation("./todo_page")
    },[isAuth])
    return (
        <div className={"App"}>


                 <Routes>
                        <Route path={"/login"} element={
                            <LoginForm
                                setIsAuth={setIsAuth}
                                users={state}

                            />
                        }/>
                        <Route path={"/todo_page"} element={<TodoPage />  }/>
                            <Route path={"/todo_page/:id"} element={<Todo />  }/>
                            <Route path={"/todo_page/:id"} element={<Todo />  }/>
                            <Route path={"/todo_page/:id"} element={<Todo />  }/>
                            <Route path={"/todo_page/:id"} element={<Todo />  }/>
                            <Route path={"/todo_page/:id"} element={<Todo />  }/>
                 </Routes>
            <Outlet/>
        </div>
    );
}





