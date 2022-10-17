
export type stateType = {
    user: string, password: string, isAuth: boolean, image: string, userCount: number, userId: (localPrefix?: (string | null | undefined)) => string, todos: {task: string, isDone: boolean, count: number, id: (localPrefix?: (string | null | undefined)) => string
    }[]}[]
