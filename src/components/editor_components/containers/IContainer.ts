import { ReactNode } from "react"

export interface IContainerProperties {}

export interface IContainer {
    id: string
    properties?: IContainerProperties
    children?: ReactNode
}
