import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => null,
    isLoggingIn: false,
    setIsLoggingIn: () => null
})

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggingIn, setIsLoggingIn] = useState(null);

    const value = {user, setUser, isLoggingIn, setIsLoggingIn};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}