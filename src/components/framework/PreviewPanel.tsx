import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { useState } from "react"
import { JsonForms } from "@jsonforms/react"
import { materialCells, materialRenderers } from "@jsonforms/material-renderers"
import { GoABaseRenderers, GoACells, GoARenderers } from "@abgov/jsonforms-components"

export function PreviewPanel() {
    const { ui_schema, data_schema } = useSchema()
    const [data, SetData] = useState({})

    const renderers = [...materialRenderers, ...GoABaseRenderers, ...GoARenderers]
    const cells = [...materialCells, ...GoACells]

    function OnChange(e: any) {
        if (e.errors.length > 0) {
            console.error(e.errors)

            return
        }
        SetData(e.data)
    }

    return (
        <div className="bg-background text-foreground h-svh">
            <div className="bg-background text-foreground scroll-auto h-[calc(100vh-6em)] overflow-auto pl-8 pr-20 py-6">
                <JsonForms
                    schema={JSON.parse(data_schema)}
                    uischema={JSON.parse(ui_schema)}
                    data={data}
                    renderers={renderers}
                    cells={cells}
                    onChange={OnChange}
                    additionalErrors={[]}
                ></JsonForms>
            </div>
        </div>
    )
}
