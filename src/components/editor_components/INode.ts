import { IContainer } from "@/components/editor_components/containers/IContainer.ts"
import { IProperty } from "@/components/editor_components/IProperty.ts"
import { ReactNode } from "react"

export interface INode {
    id: string
    parent?: IContainer | null
    properties?: IProperty[]
    render: () => ReactNode
    position: number
}
