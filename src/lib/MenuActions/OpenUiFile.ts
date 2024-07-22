import { open } from "@tauri-apps/api/dialog"
import { readTextFile } from "@tauri-apps/api/fs"

export async function OpenUiFile(
    SetUiBuffer: (buffer: string) => void,
    SetIsUiDirty: (is_dirty: boolean) => void,
    SetUiSchemaPath: (schema_path: string) => void,
    SetUiSchema: (schema: string) => void
) {
    const dialog_result = await open({})
    if (typeof dialog_result === "string") {
        const buffer = await readTextFile(dialog_result)
        SetUiBuffer(buffer)
        SetUiSchemaPath(dialog_result)
        SetIsUiDirty(true)
        SetUiSchema(buffer)
        return
    }
}
