


export interface userStateInterface {
    user : string,
    password : string,
    isAuth : boolean,
    image : string,
    userCount : number,
    userId : string,
    todos : todosType[]
}

export type todosType = {
    task : string,
    isDone : boolean,
    count : number,
    id : string,
}
