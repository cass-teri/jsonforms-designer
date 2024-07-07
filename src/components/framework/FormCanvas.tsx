import { DropIndicator } from "@/components/framework/DropIndicator.tsx"
import { ReactNode, useState } from "react"

import { useTheme } from "@/components/contexts/ThemeProvider"
import { GetComponentForSchemaName } from "@/components/generation/GetComponentForSchemaName.tsx"

export default function FormCanvas() {
    const { theme } = useTheme()
    const bg_color = theme === "dark" ? "bg-neutral-800" : "bg-white"
    const component_color = theme === "dark" ? "bg-accent" : "bg-white"

    const [children, SetChildren] = useState<ReactNode[]>([])

    function OnDrop(schema: string | object) {
        if (typeof schema === "string") {
            const component = GetComponentForSchemaName(schema)

            SetChildren((prev) => [...prev, component])
        } else {
            const component = <div className="h-12 w-full border p-4">{JSON.stringify(schema)}</div>
            SetChildren((prev) => [...prev, component])
        }
    }

    return (
        <main className={`pt-12 max-h-svh scroll-auto flex flex-col justify-between ${bg_color} h-svh scroll-auto`}>
            <div
                className={`max-w-7xl w-full shadow-2xl h-fit min-h-12 mx-auto flex flex-col border-neutral-300 border px-4 py-2 justify-between ${component_color}`}
            >
                <DropIndicator key={-1} OnDrop={OnDrop}></DropIndicator>
                {children.map((child, index) => (
                    <div key={index}>
                        <div>{child}</div>
                        <DropIndicator key={`${index}+1`} OnDrop={OnDrop}></DropIndicator>
                    </div>
                ))}
            </div>
        </main>
    )
}
