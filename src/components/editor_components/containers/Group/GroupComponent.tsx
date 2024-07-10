import { ReactNode } from "react"
import {ContainerComponent} from "@/components/editor_components/containers/ContainerComponent.tsx";
import {IContainer} from "@/components/editor_components/containers/IContainer.ts";

export interface IContainerProps {
    children?: ReactNode
    properties?: object
    id?: string
}

export class GroupComponent extends ContainerComponent{

    constructor(id:string, parent: IContainer | null) {
        super(id, parent)
    }

    render() {
        return <div>{this.children.map(
            child => {
                return child.render()
            }
        )}</div>
    }
}
