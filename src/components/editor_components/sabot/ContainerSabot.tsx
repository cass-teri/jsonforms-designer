import { ReactNode, useState } from "react"
import { DropIndicator } from "@/components/framework/DropIndicator.tsx"

interface IContainerSabotProps {
    OnDrop?: (schema: string | object) => void
    children?: ReactNode
    name?: string
    id?: string
}

export function ContainerSabot(props: IContainerSabotProps) {
    const [selected, SetSelected] = useState(false)
    const children = props.children

    function OnDrop() {
        if (props.OnDrop) {
            props.OnDrop("container")
        }
    }

    return (
        <div
            id={props.id}
            onClick={() => SetSelected((prev) => !prev)}
            className={`hover:bg-blue-300-50 p-4 min-h-12 flex flex-col rounded-t-xl ${selected ? "bg-green-200" : ""}`}
        >
            <div className="rounded-t-xl">Container: {props.name}</div>
            {children}
            <DropIndicator OnDrop={OnDrop} />
        </div>
    )
}
