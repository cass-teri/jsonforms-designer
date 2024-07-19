import {createContext, ReactNode, useContext, useEffect, useState} from "react"
//import { GenerateAst } from "@/components/contexts/GenerateAst.tsx"

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


    useEffect(() => {
        const data_schema = localStorage.getItem("data_schema")
        const ui_schema = localStorage.getItem("ui_schema")

        if (data_schema) {
            SetDataBuffer(data_schema)
            SetDataSchema(data_schema)
        }

        if (ui_schema) {
            SetUiBuffer(ui_schema)
            SetUiSchema(ui_schema)
        }
    }, [])


    function SetDataSchema(newDataSchema: string) {
        if (newDataSchema === "") {
            localStorage.setItem("data_schema", newDataSchema)
            SetDataSchemaInner("{}")
            return
        }

        localStorage.setItem("data_schema", newDataSchema)
        SetDataSchemaInner(newDataSchema)

        try {
            //const ast = GenerateAst(newDataSchema, ui_schema)
            //SetAst(ast)
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

        localStorage.setItem("ui_schema", newUiSchema)
        SetUiSchemaInner(newUiSchema)

        try {
            //const ast = GenerateAst(data_schema, ui_schema)
            //SetAst(ast)
        } catch (e) {
            console.error(e)
            return
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
        ast,
        is_dirty,
        SetIsDirty
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
