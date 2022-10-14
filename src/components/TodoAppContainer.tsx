import React, {useState} from 'react';
import {initialState} from "../store";


const [state , setState] = useState( initialState || [])

console.log(state)

const TodoAppContainer = () => {
    return (
        <div>

        </div>
    );
};

export default TodoAppContainer;
