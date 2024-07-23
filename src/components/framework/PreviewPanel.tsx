import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import {useEffect, useState} from "react"
import { JsonForms } from "@jsonforms/react"
import { materialCells, materialRenderers } from "@jsonforms/material-renderers"
import { GoABaseRenderers, GoACells, GoARenderers } from "@abgov/jsonforms-components"
import {useStatusMessage} from "@/components/contexts/StatusMessageProvider.tsx";
import {DataObject} from "@/components/framework/DataObject.tsx";


export function PreviewPanel() {
    const { ui_schema, data_schema } = useSchema()
    const [data, SetData] = useState({})
    const [data_parsed, SetDataParsed] = useState({})
    const [ui_parsed, SetUiParsed] = useState({})
    const {SetStatusMessage} = useStatusMessage()

    const renderers = [...materialRenderers, ...GoABaseRenderers, ...GoARenderers]
    const cells = [...materialCells, ...GoACells]

    function OnChange(e: any) {
        try {
            if (e.errors.length > 0) {
                console.error(e.errors)

                return
            }
            SetData(e.data)
            console.log("data", e.data)
        }catch(e: any){
            SetStatusMessage({message: e.message, type: "error"})
            console.error(e)
        }
    }

    useEffect(() => {
        try {
            const d = JSON.parse(data_schema)
            SetDataParsed(d)
        }catch(e: any){
            SetStatusMessage({message: e.message, type: "error"})
            console.error(e)
        }
    }, [SetStatusMessage, data_schema]);

    useEffect(() => {
        try {
            const u = JSON.parse(ui_schema)
            SetUiParsed(u)
        } catch(e: any){
            SetStatusMessage({message: e.message, type: "error"})
            console.error(e)
        }

    }, [SetStatusMessage, ui_schema]);

    function OnClick() {
        SetData({})
    }

    return (
        <div className="bg-background text-foreground h-svh">
            <div className="bg-background text-foreground scroll-auto h-[calc(100vh-6em)] overflow-auto pl-8 pr-20 py-6 flex flex-col justify-between gap-6">
                <JsonForms
                    schema={data_parsed}
                    uischema={ui_parsed}
                    data={data}
                    renderers={renderers}
                    cells={cells}
                    onChange={OnChange}
                    additionalErrors={[]}
                ></JsonForms>
                <hr className="bg-neutral-700 h-2 pt-2"/>
                <div className="relative">
                    <div className="flex flex-row justify-between">
                    <h3>Data:</h3>
                        <button onClick={OnClick}>Reset Data</button>
                    </div>
                    <DataObject data_object={data}></DataObject>
                </div>
            </div>
        </div>
    )
}
