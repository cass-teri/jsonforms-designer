import {ReactNode} from "react";

interface IToggleButtonProps {
    view: string
    icon: ReactNode
    toggleView: (view: string) => void
    children?: ReactNode
    is_active?: boolean
}

export function ToggleButton(props: IToggleButtonProps) {

    return (
        <button className={`${props.is_active?"bg-neutral-500 text-neutral-50":""} flex flex-row h-8 px-4 py-2 justify-center items-center rounded text-sm`} onClick={()=>props.toggleView(props.view)}>
            <div className="pr-2">{props.icon}</div>
            <div>{props.children}</div>
        </button>
    )
}
