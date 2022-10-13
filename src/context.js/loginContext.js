import { createContext, useState } from "react";

const loginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const loginFunction= (data) => {
        setToken(data)
    }
 
    return (
        <loginContext.Provider value={{ token, loginFunction }}>
            {children}
        </loginContext.Provider>
    )
}

export default loginContext;