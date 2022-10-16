import React, {lazy, Suspense, useState} from "react";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {textType} from "./components/Page";
let Admin = lazy(() => import('./components/Page'));

export default function App() {
    const [flag , setFlag] = useState(false)
    return (
        <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/admin1">Admin1</Link>
                    <Link to="/admin2">Admin2</Link>
                    <Link to="/admin3">Admin3</Link>
                    <Link to="/admin4">Admin4</Link>
                    {flag?<Navigate to={"/login"} replace={true}/>:<Navigate to="/admin" replace={true} />}

                </nav>
                <Suspense fallback="Loading…">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin text = {"null"}  setFlag={setFlag}/>} />
                        <Route path="/admin1" element={<Admin text = {"one"} setFlag={setFlag}/>} />
                        <Route path="/admin2" element={<Admin text = {"two"}  setFlag={setFlag}/>} />
                        <Route path="/admin3" element={<Admin text = {"three"}  setFlag={setFlag}/>} />
                        <Route path="/admin4" element={<Admin text = {"four"}  setFlag={setFlag}/>} />
                        <Route path="/login" element={<Login text = {"four"}  setFlag={setFlag}/>} />
                    </Routes>
                </Suspense>
        </div>
    );
}

function Home() {
    return (
        <main>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </main>
    );
}function Login({text , setFlag}:textType) {
    return (
        <main>
            <h1>Hello CodeSandbox</h1>
            <button
            onClick={()=>setFlag(prev=>!prev)}
            >ok</button>
        </main>
    );
}
