import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Link to={"1"}>page</Link>
            <Link to={"2"}>page</Link>
            <Link to={"3"}>page</Link>
            <Link to={"4"}>page</Link>
            <Link to={"5"}>page</Link>
            MainPage
        </div>
    );
};

export default MainPage;
