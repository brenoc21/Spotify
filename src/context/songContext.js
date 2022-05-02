import { createContext, useContext, useState } from "react";

export const SongContext = createContext({})

export default function SongProvider({children}) {
    const [active, setActive] = useState(undefined);
    const [ActivePlaylist, setActivePlaylist] = useState(undefined)
    return <SongContext.Provider value={{active, setActive, ActivePlaylist, setActivePlaylist}}>{children}</SongContext.Provider>;

}

export function useSong() {
    const songContext = useContext(SongContext);
    
    const {active, setActive, ActivePlaylist, setActivePlaylist} = songContext;
    return {active, setActive, ActivePlaylist, setActivePlaylist};
}