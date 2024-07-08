import { useState } from "react"
import { motion } from "framer-motion"
import { LuMaximize2, LuMinimize2 } from "react-icons/lu"

export function PropertiesPanel() {
    const [minimize, setMinimize] = useState(true)

    const minimize_icon = minimize ? (
        <LuMinimize2 className="text-foreground" />
    ) : (
        <LuMaximize2 className="text-foreground" />
    )

    function Minimize() {
        setMinimize(!minimize)
    }

    return (
        <motion.aside
            className={`fixed top-14 right-0 bottom-0 bg-background text-foreground z-50 p-4 shadow-2xl ${minimize ? "w-12" : "w-96"}`}
            layout
            layoutId="properties-panel"
        >
            <div className="flex flex-row justify-between">
                {minimize ? null : <span className="text-2xl">Properties</span>}
                <button className="text-white dark:text-neutral-800" onClick={Minimize}>
                    {minimize_icon}
                </button>
            </div>
        </motion.aside>
    )
}
