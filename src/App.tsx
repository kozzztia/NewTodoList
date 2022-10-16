import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Routes, NavLink , useLocation } from "react-router-dom";

export default function App() {
    const [flag , setFlag] = useState(true)

    return (
        <Router>
            <div>
                <nav>
                        <li><NavLink to="/login">Login</NavLink></li>
                </nav>
                <Routes>
                     <Route path="/"  element={<Page text = "first"/>} />
                     <Route path="/login"  element={<Login />} />
                     <Route path="/products/:id" element={<Page text = 'id'/>} />
                </Routes>
            </div>
        </Router>
    );
}
type TextType = {
    text:string
}
const Login = () => {
    return (
        <div>
            <input type="text"/>
            <button>ok</button>
            <li><NavLink to="/">Home</NavLink>
            </li>
        </div>
    );
};

const Page = ({text} : TextType) => {
    const productName = useLocation()
    let product = productName.pathname
    console.log(product)
    return (
        <div>
            {text + product}

            <ul>

                <li><NavLink to="/products/apple">apple</NavLink>
                </li>
                <li><NavLink to="/products/pear">pear</NavLink>
                </li>
            </ul>
        </div>
    );
};




