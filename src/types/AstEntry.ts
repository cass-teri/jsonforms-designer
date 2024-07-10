import { UiSchemaOptions } from "@/types/UiSchemaOptions.ts"

export type AstEntry = {
    type: string
    label?: string | null
    elements?: AstEntry[] | null
    scope?: string | null
    suggestion?: string[] | null
    options?: UiSchemaOptions | null
}
