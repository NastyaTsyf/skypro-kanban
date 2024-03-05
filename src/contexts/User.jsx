import { createContext, useState } from "react";
const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('user'))
    } catch (error) {
        console.log(error)
        return null
    }
}
export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocalStorage())
    const login = (newUser) => {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}