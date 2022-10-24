import React from 'react';
import {useParams} from "react-router-dom";

const Page = () => {
    const param = useParams()
    return (
        <div>
            <h2>{param.id}</h2>
        </div>
    );
};

export default Page;
