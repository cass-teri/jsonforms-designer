import { ReactNode } from "react"

interface IInputSabotProps {
    children?: ReactNode
    name?: string
    id?: string
}

export function InputSabot(props: IInputSabotProps) {
    return (
        <div className="flex flex-row" id={props.id}>
            <h2>{props.name}</h2>
            {props.children}
        </div>
    )
}
