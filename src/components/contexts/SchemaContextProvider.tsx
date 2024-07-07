import { createContext, ReactNode, useContext, useState } from "react"
import { GenerateAst } from "@/components/contexts/GenerateAst.tsx"

interface ISchemaContextProviderProps {
    children: ReactNode
}

type SchemaContextType = {
    ui_schema: string
    SetUiSchema: (schema: string) => void

    data_schema: string
    SetDataSchema: (schema: string) => void

    ui_buffer: string
    SetUiBuffer: (buffer: string) => void

    data_buffer: string
    SetDataBuffer: (buffer: string) => void

    ast: object

    is_dirty: boolean
    SetIsDirty: (is_dirty: boolean) => void
}

const initialSchemaContext: SchemaContextType = {
    ui_schema: "",
    SetUiSchema: (_: string) => {},

    data_schema: "",
    SetDataSchema: (_: string) => {},

    ui_buffer: "",
    SetUiBuffer: (_: string) => {},

    data_buffer: "",
    SetDataBuffer: (_: string) => {},

    ast: {},

    is_dirty: false,
    SetIsDirty: (_: boolean) => {}
}

export const SchemaDesignerContext = createContext(initialSchemaContext)

export function SchemaContextProvider(props: ISchemaContextProviderProps) {
    const [ui_schema, SetUiSchemaInner] = useState("{}")
    const [data_schema, SetDataSchemaInner] = useState("{}")
    const [data_buffer, SetDataBuffer] = useState("{}")
    const [ui_buffer, SetUiBuffer] = useState("{}")
    const [ast, SetAst] = useState({})
    const [is_dirty, SetIsDirty] = useState(false)

    function SetDataSchema(newDataSchema: string) {
        if (newDataSchema === "") {
            SetDataSchemaInner("{}")
            return
        }

        SetDataSchemaInner(newDataSchema)

        try {
            const ast = GenerateAst(newDataSchema, ui_schema)
            SetAst(ast)
        } catch (e) {
            console.error(e)
            return
        }
    }

    function SetUiSchema(newUiSchema: string) {
        if (newUiSchema === "") {
            SetUiSchemaInner("{}")
            return
        }

        try {
            const ast = GenerateAst(data_schema, ui_schema)
            SetAst(ast)
        } catch (e) {
            console.error(e)
            return
        }

        SetUiSchemaInner(newUiSchema)
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
        ast,
        is_dirty,
        SetIsDirty
    }

    return <SchemaDesignerContext.Provider value={schemaContext}>{props.children}</SchemaDesignerContext.Provider>
}

export const useSchema = () => {
    const context = useContext(SchemaDesignerContext)
    if (context === undefined) {
        throw new Error("useFormDesigner must be used within a SchemaContextProvider")
    }
    return context
}
