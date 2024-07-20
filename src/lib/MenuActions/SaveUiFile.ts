import { writeTextFile } from "@tauri-apps/api/fs"

export async function SaveUiFile(ui_schema: string, ui_schema_path: string, SetIsUiDirty: (is_dirty: boolean) => void) {
    try {
        if (ui_schema_path == "") {
            return "UI schema path is empty"
        }

        await writeTextFile(ui_schema_path, ui_schema)
        SetIsUiDirty(false)
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
