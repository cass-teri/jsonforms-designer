import { IContainer } from "@/components/editor_components/containers/IContainer.ts"
import { INode } from "@/components/editor_components/INode.ts"
import { ReactNode } from "react"

export abstract class ContainerComponent implements INode, IContainer {
    id: string
    type: string
    children: INode[]
    parent: IContainer | null
    position: number

    constructor(id: string, parent: IContainer | null) {
        this.id = id
        this.children = []
        this.parent = parent
        this.type = "container"
        this.position = -1
    }

    AddChild(child: INode): void {
        this.children?.push(child)
    }

    RemoveChild(child: INode): void {
        this.children?.splice(this.children.indexOf(child), 1)
    }

    GetChild(id: string): INode | undefined {
        return this.children?.find((child) => child.id === id)
    }

    HasChildren(): boolean {
        if (this.children == null) {
            return false
        }
        return this.children.length > 0
    }

    MoveChildUp(child: INode): void {
        this.children.splice(this.children.indexOf(child), 1)
        this.children.splice(this.children.indexOf(child) + 1, 0, child)
    }

    MoveChildDown(child: INode): void {
        this.children.splice(this.children.indexOf(child), 1)
        this.children.splice(this.children.indexOf(child) - 1, 0, child)
    }

    MoveChildAfter(child: INode, after: INode): void {
        this.children.splice(this.children.indexOf(child), 1)
        this.children.splice(this.children.indexOf(after) + 1, 0, child)
    }

    MoveChildToStart(child: INode): void {
        this.children.splice(this.children.indexOf(child), 1)
        this.children.unshift(child)
    }

    render(): ReactNode {
        return (
            <div>
                {this.children.map((child) => {
                    return child.render()
                })}
            </div>
        )
    }
}
