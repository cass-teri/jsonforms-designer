import { createContext, ReactNode, useContext, useState } from "react"

type VimModeState = {
    vim_mode: boolean
    SetVimMode: (_: boolean) => void
}

const initial_state: VimModeState = {
    vim_mode: true,
    SetVimMode: (_: boolean) => {}
}

export const VimModeContext = createContext<VimModeState>(initial_state)

export function VimModeContextProvider({ children }: { children: ReactNode }) {
    const [vim_mode, SetVimMode] = useState<boolean>(true)

    const vim_mode_state: VimModeState = { vim_mode, SetVimMode }
    return <VimModeContext.Provider value={vim_mode_state}>{children}</VimModeContext.Provider>
}

export const useVimMode = () => {
    const context = useContext(VimModeContext)
    if (context === undefined) {
        throw new Error("useVimMode must be used within a VimModeContextProvider")
    }
    return context
}
