import { createContext, ReactNode, useContext, useState } from "react"

export type StatusMessage = {
    message: string
    type: "error" | "success" | "info"
}

const initialStatusMessage: StatusMessage = {
    message: "",
    type: "info"
}

type StatusMessageContext = {
    status_message: StatusMessage
    SetStatusMessage: (_: StatusMessage) => void
}

const initialStatusMessageContext: StatusMessageContext = {
    status_message: { message: "", type: "info" },
    SetStatusMessage: (_) => {}
}

export interface IStatusMessageContextProviderProps {
    children: ReactNode
}

const StatusMessageContext = createContext(initialStatusMessageContext)

export function StatusMessageContextProvider(props: IStatusMessageContextProviderProps) {
    const [status_message, SetStatusMessageInner] = useState<StatusMessage>(initialStatusMessage)

    function SetStatusMessage(newStatusMessage: StatusMessage) {
        console.log(`Setting status message: ${newStatusMessage.message}`)
        SetStatusMessageInner(newStatusMessage)
    }

    const value: StatusMessageContext = { status_message, SetStatusMessage }

    return <StatusMessageContext.Provider value={value}>{props.children}</StatusMessageContext.Provider>
}

export const useStatusMessage = () => {
    const context = useContext(StatusMessageContext)
    if (context === undefined) {
        throw new Error("useStatusMessage must be used within a StatusMessageProvider")
    }

    return context
}
