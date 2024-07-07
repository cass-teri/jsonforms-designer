import { ReactNode } from "react"
import { IContainerProps } from "@/components/editor_components/containers/Group/GroupComponent.tsx"

interface IPageProperties {
    title?: string
    description?: string
    children?: ReactNode
}

export interface IPageComponentProps extends IContainerProps {
    properties?: IPageProperties
}

export default function PageComponent(props: IPageComponentProps) {
    return <div className="shadow min-h-32">{props.children}</div>
}
