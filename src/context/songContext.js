import { createContext, useContext, useState } from "react";

export const SongContext = createContext({})

export default function SongProvider({children}) {
    const [active, setActive] = useState(undefined);
    const [ActivePlaylist, setActivePlaylist] = useState(localStorage.getItem("activePlaylist"))
    const [reload, setReload] = useState(false)
    return <SongContext.Provider value={{reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist}}>{children}</SongContext.Provider>;

}

export function useSong() {
    const songContext = useContext(SongContext);
    
    const {reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist} = songContext;
    return {reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist};
}