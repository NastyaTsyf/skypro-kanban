import { createContext,  useState } from "react";
import { getTodos } from "../api";
import { useUser } from "../hooks/useUser";

export const TasksContext = createContext(null)

export const TasksProvider = ({children}) => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {user} = useUser()

    const getTodosList = () => {
        getTodos({token: user.token}).then((todos) => {
            setCards(todos.tasks)
            setIsLoading(false)
          }).catch((error) => {alert(error)})
    }

    return(
        <TasksContext.Provider value={{cards, isLoading, getTodosList}}>
            {children}
        </TasksContext.Provider>
    )
}