import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export default function UserProvider({children}) {
    useEffect(()=> {
        setUserId(localStorage.getItem("id"))
        setNick(localStorage.getItem("nickname"))
        setToken(localStorage.getItem("token"))
    },[])
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [nick, setNick] = useState(localStorage.getItem("nickname"))
    const [token, setToken] = useState(localStorage.getItem("token"))
    return <UserContext.Provider value={{token, setToken, userId, setUserId, nick, setNick}}>{children}</UserContext.Provider>;

}

export function useUser() {
    const userContext = useContext(UserContext);
    
    const {userId, setUserId, nick, setNick, token, setToken} = userContext;
    return {userId, setUserId, nick, setNick, token, setToken};
}