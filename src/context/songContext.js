import { createContext, useContext, useState } from "react";

export const SongContext = createContext({})

export default function SongProvider({children}) {
    const [active, setActive] = useState(undefined);
    return <SongContext.Provider value={{active, setActive}}>{children}</SongContext.Provider>;

}

export function useSong() {
    const songContext = useContext(SongContext);
    const {active, setActive} = songContext;
    return {active, setActive};
}