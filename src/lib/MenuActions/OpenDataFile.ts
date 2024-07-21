import { open } from "@tauri-apps/api/dialog"
import { readTextFile } from "@tauri-apps/api/fs"

export async function OpenDataFile(
    SetDataBuffer: (buffer: string) => void,
    SetIsDataDirty: (is_dirty: boolean) => void,
    SetDataSchemaPath: (schema_path: string) => void
) {
    const dialog_result = await open({})
    if (typeof dialog_result === "string") {
        const buffer = await readTextFile(dialog_result)
        SetDataBuffer(buffer)
        SetDataSchemaPath(dialog_result)
        SetIsDataDirty(true)
    }
}
