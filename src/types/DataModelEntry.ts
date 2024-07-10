export type DataModelEntry = {
    name: string
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
    properties: DataModelEntry[] | null
}
