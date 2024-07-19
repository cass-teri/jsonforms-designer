import { IDisplay } from "@/components/editor_components/displays/IDisplay.ts"
import { INode } from "@/components/editor_components/INode.ts"
import { IContainer } from "@/components/editor_components/containers/IContainer.ts"
import { IProperty } from "@/components/editor_components/IProperty.ts"
import { ReactNode } from "react"

export abstract class DisplayComponent implements IDisplay, INode {
    id: string
    parent: IContainer | null
    properties: IProperty[] = []
    position: number = -1

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

    abstract render(): ReactNode
}
