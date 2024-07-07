import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { motion } from "framer-motion"

export interface IComponentButtonProps {
    componentButton: IComponentButton
}

export function ComponentButton(props: IComponentButtonProps) {
    function OnDragStart(event: DragEvent) {
        event.dataTransfer?.setData("schema", props.componentButton.schema)
    }

    return (
        <motion.button
            draggable
            layout
            layoutId={props.componentButton.schema}
            onDragStart={OnDragStart}
            title={props.componentButton.name}
            className="m-1 h-12 w-12"
        >
            {props.componentButton.icon}
        </motion.button>
    )
}
