import { INode } from "@/components/editor_components/INode.ts"
import { IContainer } from "@/components/editor_components/containers/IContainer.ts"
import { IProperty } from "@/components/editor_components/IProperty.ts"
import { ReactNode } from "react"

export abstract class InputComponent implements INode {
    id: string
    parent: IContainer | null
    properties: IProperty[] = []
    position: number = -1
    default_value: string | number | boolean | null = null
    placeholder: string | null = null

    constructor(id: string, parent: IContainer | null) {
        this.id = id
        this.parent = parent
    }

    Id(): string {
        return this.id
    }

    SetParent(parent: IContainer): void {
        this.parent = parent
    }

    Parent(): IContainer | null {
        return this.parent
    }

    SetPosition(position: number): void {
        this.position = position
    }

    Position(): number {
        return this.position
    }

    SetDefault(default_value: string | boolean): void {
        this.default_value = default_value
    }

    abstract render(): ReactNode
}
