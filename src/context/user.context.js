import { createContext, useEffect, useState } from "react";
import { verify } from "../api";

const userContext = createContext();

function UserProviderWrapper({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
    }

    const removeToken = () => {
        localStorage.removeItem("authToken");
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem("authToken");

        if (storeToken) {
            (async() => {
                try {
                    const response = await verify(storedToken);
                    const user = response.data;
                    setUser(user);
                    setIsLoggedIn(true);
                } catch(e) {
                    setUser(null)
                    setIsLoggedIn(false)
                }
                
            })();
        } else {
            setUser(null);
        }
    }

    const logoutUser = () => {
        removeToken();
        authenticateUser();
    }

    useEffect(() => {
        authenticateUser();
    }, [])

    return (
        <userContext.Provider value={( 
                user, 
                isLoggedIn, 
                storeToken, 
                authenticateUser, 
                logoutUser )}>
            {children}
        </userContext.Provider>
    )
}

export { UserProviderWrapper, userContext}