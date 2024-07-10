import { INode } from "@/components/editor_components/INode.ts"
import { IProperty } from "@/components/editor_components/IProperty.ts"

export interface IContainerProps {
    id: string
    name: string
    children: INode[]
    parent: IContainer
}

export interface IContainer extends INode {
    properties?: IProperty[]
    children?: INode[]
    parent?: IContainer | undefined | null

    AddChild(child: INode): void

    RemoveChild(child: INode): void

    GetChild(id: string): INode | undefined

    HasChildren(): boolean

    MoveChildUp(child: INode): void

    MoveChildDown(child: INode): void

    MoveChildAfter(child: INode, after: INode): void

    MoveChildToStart(child: INode): void
}
