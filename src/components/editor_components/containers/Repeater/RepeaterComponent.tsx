import { ReactNode } from "react"
import { ContainerComponent } from "@/components/editor_components/containers/ContainerComponent.tsx"
import { IContainer } from "@/components/editor_components/containers/IContainer.ts"

interface IRepeaterProps {
    section_template?: ReactNode
}

export interface IRepeaterComponentProps {
    children?: ReactNode
    properties?: IRepeaterProps
    id?: string
}

export class RepeaterComponent extends ContainerComponent {
    constructor(id: string, parent: IContainer | null) {
        super(id, parent)
    }
}
