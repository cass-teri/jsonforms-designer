import { writeTextFile } from "@tauri-apps/api/fs"

export async function SaveDataFile(
    data_schema: string,
    data_schema_path: string,
    SetIsDataDirty: (is_dirty: boolean) => void
) {
    try {
        if (data_schema_path == "") {
            return "Data schema path is empty"
        }

        await writeTextFile(data_schema_path, data_schema)
        SetIsDataDirty(false)
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
