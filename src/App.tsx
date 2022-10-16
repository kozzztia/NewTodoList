import React, {useState} from "react";
import "./App.css";
import {Route, Routes, NavLink} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import TodoPage from "./components/TodoPage";
import Todo from "./components/Todo";

export default function App() {
    const [flag , setFlag] = useState(true)

    return (
        <div>
            <nav>
                <NavLink to={"/login"}>LoginForm</NavLink>
                <NavLink to={"/todo_page"}>TodoPage</NavLink>
            </nav>

            <Routes>
                <Route path={"/"}>
                    <Route path={"/login"} element={<LoginForm/>}/>
                    <Route path={"/todo_page"} element={<TodoPage/>}>
                        <Route path={"/todo_page/:id"} element={<Todo/> }/>
                        <Route path={"/todo_page/:id"} element={<Todo/> }/>
                        <Route path={"/todo_page/:id"} element={<Todo/> }/>
                        <Route path={"/todo_page/:id"} element={<Todo/> }/>
                        <Route path={"/todo_page/:id"} element={<Todo/> }/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}





