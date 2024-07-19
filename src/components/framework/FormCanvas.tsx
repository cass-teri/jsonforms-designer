import { DropIndicator } from "@/components/framework/DropIndicator.tsx"
import { ReactNode, useEffect, useState } from "react"

import { useTheme } from "@/components/contexts/ThemeProvider"
import { GetComponentForSchemaName } from "@/lib/GetComponentForSchemaName"
import { useSchema } from "@/components/contexts/SchemaContextProvider"
import { DataSchemaToModel } from "@/lib/DataSchemaToModel"
import { UiSchemaToAst } from "@/lib/UiSchemaToAst"
import { useStatusMessage } from "@/components/contexts/StatusMessageProvider.tsx"

export default function FormCanvas() {
    const { theme } = useTheme()
    const { data_buffer, ui_buffer } = useSchema()
    const { SetStatusMessage } = useStatusMessage()
    const bg_color = theme === "dark" ? "bg-neutral-800" : "bg-white"
    const component_color = theme === "dark" ? "bg-accent" : "bg-white"
    //const [data_model, SetDataModel] = useState<object | null>(null)

    const [children, SetChildren] = useState<ReactNode[]>([])

    useEffect(() => {
        let status = ""
        if (data_buffer) {
            try {
                const model = DataSchemaToModel(data_buffer)
                const ast = UiSchemaToAst(ui_buffer)
                //const react_dnd_base = BuildDragAndDropTree(model, ast)
                console.log(model)
                console.log(ast)
                status = ""
                SetStatusMessage({ message: status, type: "success" })
            } catch (e) {
                SetStatusMessage({ message: status, type: "error" })
            }
        }
    }, [data_buffer, ui_buffer, SetStatusMessage])

    function OnDrop(schema: string | object) {
        if (typeof schema === "string") {
            const component = GetComponentForSchemaName(schema)
            const type = typeof component
            console.log(`Component type: ${type}`)

            if (type === "function") {
                const component = <div className="h-12 w-full border p-4">{JSON.stringify(schema)}</div>
                SetChildren((prev) => [...prev, component])
                return
            }
            //SetChildren((prev) => [...prev, component])
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
