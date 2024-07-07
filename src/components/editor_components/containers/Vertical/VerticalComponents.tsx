import { ReactNode } from "react"

interface IVerticalProps {
    children?: ReactNode
}

interface IVerticalComponentProps {
    children?: ReactNode
    properties?: IVerticalProps
    id?: string
}

export function VerticalComponent(props: IVerticalComponentProps) {
    return <div>{props.children}</div>
}
