import { ReactNode } from "react"

export interface IComponentButton {
    name: string
    icon: ReactNode
    schema: string
    container: boolean
    category: "layout" | "inputs" | "displays" | "controls" | "other"
}
