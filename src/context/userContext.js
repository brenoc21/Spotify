import { createContext, useContext, useState } from "react";

export const UserContext = createContext({})

export default function UserProvider({children}) {
    const [userId, setUserId] = useState(undefined);
    const [nick, setNick] = useState(undefined)
    const [token, setToken] = useState()
    return <UserContext.Provider value={{token, setToken, userId, setUserId, nick, setNick}}>{children}</UserContext.Provider>;

}

export function useUser() {
    const userContext = useContext(UserContext);
    
    const {userId, setUserId, nick, setNick, token, setToken} = userContext;
    return {userId, setUserId, nick, setNick, token, setToken};
}