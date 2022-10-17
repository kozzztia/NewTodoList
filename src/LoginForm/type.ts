import React from "react";
import {stateType} from "../store/type";

export interface LoginFormInterface {
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>,
    users : stateType,
    setActiveUser : React.Dispatch<React.SetStateAction<{} | stateType>>
}
export type formValue ={
    username : string,
    password: string,
}
