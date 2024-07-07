import { ReactNode } from "react"

export interface IContainerProps {
    children?: ReactNode
    properties?: object
    id?: string
}

export function GroupComponent(props: IContainerProps) {
    return <div>{props.children}</div>
}
