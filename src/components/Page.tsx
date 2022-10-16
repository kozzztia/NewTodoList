import React from 'react';

export type textType = {
    text : string,
    setFlag : React.Dispatch<React.SetStateAction<boolean>>
}


const Page = ({text , setFlag}:textType) => {
    return (
        <div>
            <h2>{text}</h2>
            <button
                onClick={()=>setFlag(prev => !prev)}
            >
                ok
            </button>
        </div>
    );
};

export default Page;
