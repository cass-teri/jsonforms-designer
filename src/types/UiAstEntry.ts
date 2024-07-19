import { UiSchemaOptions } from "@/types/UiSchemaOptions.ts"

export type UiAstEntry = {
    type: string
    label?: string | null
    elements?: UiAstEntry[] | null
    scope?: string | null
    suggestion?: string[] | null
    options?: UiSchemaOptions | null
}
