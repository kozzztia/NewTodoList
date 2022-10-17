import nextId from "react-id-generator";


export const state= [
     {
        user:"kozzztia",
        password:"12345",
        isAuth: false,
        image: "https://geekhero.ru/wp-content/uploads/2013/03/1335941056_tumblr_l6axf1ejxh1qckjsho1_500-250x250.jpg",
        userCount: 1,
        userId: nextId,
        todos:[
            {task:"eat", isDone: false , count: 1 ,id: nextId},
            {task:"walk", isDone: false , count: 2 ,id: nextId},
            {task:"fly", isDone: false , count: 3 ,id: nextId},
            {task:"sleep", isDone: false , count: 4 ,id: nextId},
        ]
    },
    {
        user:"user",
        password:"user",
        isAuth: false,
        image: "https://www.brif.kz/blog/wp-content/uploads/166199_177974772235392_100000686101517_457836_4362528_n.jpg",
        userCount: 2,
        userId: nextId,
        todos:[
            {task:"play", isDone: false , count: 1 ,id: nextId},
            {task:"gone", isDone: false , count: 2 ,id: nextId},
            {task:"breath", isDone: false , count: 3 ,id: nextId},
            {task:"sick", isDone: false , count: 4 ,id: nextId},
        ]
    },

]
