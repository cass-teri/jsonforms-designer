import { createContext, ReactNode, useState } from "react"

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
    const [status_message, SetStatusMessage] = useState<StatusMessage>(initialStatusMessage)

    const value: StatusMessageContext = { status_message, SetStatusMessage }

    return <StatusMessageContext.Provider value={value}>{props.children}</StatusMessageContext.Provider>
}
