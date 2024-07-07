import { ReactNode } from "react"

interface IRepeaterProps {
    section_template?: ReactNode
}

export interface IRepeaterComponentProps {
    children?: ReactNode
    properties?: IRepeaterProps
    id?: string
}

export function RepeaterComponent(props: IRepeaterComponentProps) {
    return <div>{props.children}</div>
}
