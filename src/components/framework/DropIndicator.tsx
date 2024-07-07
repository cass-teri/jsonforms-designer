import { motion } from "framer-motion"
import { useState } from "react"

interface DropIndicatorProps {
    OnDrop: (schema: string | object) => void
}

export function DropIndicator(props: DropIndicatorProps) {
    const [active, SetActive] = useState(false)

    function OnDragOver(event: any) {
        event.preventDefault()
        SetActive(true)
    }

    function OnDrop(event: any) {
        SetActive(false)
        const data = event.dataTransfer?.getData("schema")
        if (data) {
            props.OnDrop(data)
        }
    }

    function OnDragLeave() {
        SetActive(false)
    }

    return (
        <motion.div
            layout
            onDragOver={OnDragOver}
            onDrop={OnDrop}
            onDragLeave={OnDragLeave}
            className={`w-full rounded bg-secondary ${active ? "h-10" : "h-4"}`}
        ></motion.div>
    )
}
