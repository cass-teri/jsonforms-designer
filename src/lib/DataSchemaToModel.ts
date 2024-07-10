type DataModelEntry = {
    entry_name: string
    type: "string" | "integer" | "number" | "boolean" | "array" | "object"
    required: boolean
    default: string | number | boolean | null
    description: string | null
    pattern: string | null
    minLength: number | null
    maxLength: number | null
    minimum: number | null
    maximum: number | null
    enum: string[] | number[] | null
}

const DataSchemaToModel = (data_schema: string) => {
    const json_schema = JSON.parse(data_schema)

    Object.keys(json_schema).forEach((key) => {
        const entry = json_schema[key] as DataModelEntry
        const entry_name = entry.properties
    })
}
