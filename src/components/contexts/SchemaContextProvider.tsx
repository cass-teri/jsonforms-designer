import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import {useStatusMessage} from "@/components/contexts/StatusMessageProvider.tsx";

//import { GenerateAst } from "@/components/contexts/GenerateAst.tsx"

interface ISchemaContextProviderProps {
    children: ReactNode
}

type SchemaContextType = {
    project_name: string
    SetProjectName: (name: string) => void

    project_path: string
    SetProjectPath: (path: string) => void

    data_schema: string
    SetDataSchema: (schema: string) => boolean

    data_schema_path: string
    SetDataSchemaPath: (path: string) => void

    data_buffer: string
    SetDataBuffer: (buffer: string) => void

    ui_schema: string
    SetUiSchema: (schema: string) => boolean

    ui_schema_path: string
    SetUiSchemaPath: (path: string) => void

    ui_buffer: string
    SetUiBuffer: (buffer: string) => void

    is_data_dirty: boolean
    SetIsDataDirty: (is_dirty: boolean) => void

    is_ui_dirty: boolean
    SetIsUiDirty: (is_dirty: boolean) => void
}

const initialSchemaContext: SchemaContextType = {
    ui_schema: "",
    SetUiSchema: (_: string) =>!_,

    data_schema: "",
    SetDataSchema: (_: string) => !_,

    data_schema_path: "",
    SetDataSchemaPath: (_: string) => _,

    ui_schema_path: "",
    SetUiSchemaPath: (_: string) => _,

    ui_buffer: "",
    SetUiBuffer: (_: string) => _,

    data_buffer: "",
    SetDataBuffer: (_: string) => _,

    is_data_dirty: false,
    SetIsDataDirty: (_: boolean) => _,

    is_ui_dirty: false,
    SetIsUiDirty: (_: boolean) => _,

    project_name: "",
    SetProjectName: (_: string) => _,

    project_path: "",
    SetProjectPath: (_: string) => _
}

export const SchemaDesignerContext = createContext(initialSchemaContext)

export function SchemaContextProvider(props: ISchemaContextProviderProps) {
    const [ui_schema, SetUiSchemaInner] = useState("{}")
    const [data_schema, SetDataSchemaInner] = useState("{}")
    const [data_buffer, SetDataBuffer] = useState("{}")
    const [ui_buffer, SetUiBuffer] = useState("{}")
    const [project_name, SetProjectName] = useState("")
    const [project_path, SetProjectPath] = useState("")

    const [data_schema_path, SetDataSchemaPathInner] = useState("")
    const [ui_schema_path, SetUiSchemaPathInner] = useState("")

    const [is_data_dirty, SetIsDataDirty] = useState(false)
    const [is_ui_dirty, SetIsUiDirty] = useState(false)
    const {SetStatusMessage} = useStatusMessage()

    useEffect(() => {
        if (data_schema) {
            SetDataBuffer(data_schema)
            SetDataSchema(data_schema)
        }

        if (ui_schema) {
            SetUiBuffer(ui_schema)
            SetUiSchema(ui_schema)
        }
    }, [data_schema, ui_schema])

    function SetDataSchemaPath(newDataSchemaPath: string) {
        console.log("SetDataSchemaPath", newDataSchemaPath)
        SetDataSchemaPathInner(newDataSchemaPath)
    }

    function SetUiSchemaPath(newUiSchemaPath: string) {
        console.log("SetUiSchemaPath", newUiSchemaPath)
        SetUiSchemaPathInner(newUiSchemaPath)
    }

    function SetDataSchema(newDataSchema: string) {
        if (newDataSchema === "") {
            SetDataSchemaInner("{}")
            return true
        }

        try {
            const model = JSON.parse(newDataSchema)
            if (model !== null) {
                SetDataSchemaInner(newDataSchema)
            }
            return true
        } catch (e:any) {
            SetStatusMessage({message: e.message, type: "error"})
            return false
        }

    }

    function SetUiSchema(newUiSchema: string) {
        if (newUiSchema === "") {
            SetUiSchemaInner("{}")
            return true
        }

        try {
            const model = JSON.parse(newUiSchema)
            if (model !== null) {
                SetUiSchemaInner(newUiSchema)
            }
            return true
        } catch (e: any) {
            SetStatusMessage({message: e.message, type: "error"})
            return false
        }
    }

    const schemaContext = {
        data_schema,
        SetDataSchema,
        ui_schema,
        SetUiSchema,
        ui_buffer,
        SetUiBuffer,
        data_buffer,
        SetDataBuffer,
        is_data_dirty,
        SetIsDataDirty,
        is_ui_dirty,
        SetIsUiDirty,
        project_name,
        SetProjectName,
        project_path,
        SetProjectPath,
        data_schema_path,
        SetDataSchemaPath,
        ui_schema_path,
        SetUiSchemaPath
    }

    return <SchemaDesignerContext.Provider value={schemaContext}>{props.children}</SchemaDesignerContext.Provider>
}

export const useSchema = () => {
    const context = useContext(SchemaDesignerContext)
    if (context === undefined) {
        throw new Error("useSchema must be used within a SchemaContextProvider")
    }
    return context
}
