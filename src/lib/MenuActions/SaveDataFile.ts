import { writeTextFile } from "@tauri-apps/api/fs"
import { save } from "@tauri-apps/api/dialog"

export async function SaveDataFile(
    data_schema: string,
    data_schema_path: string,
    SetIsDataDirty: (is_dirty: boolean) => void
) {
    console.log("save_data_schema path", data_schema_path)
    try {
        let path: string | null = data_schema_path
        if (data_schema_path == "") {
            path = await save({
                filters: [
                    {
                        name: "data_schema",
                        extensions: ["json"]
                    }
                ]
            })
        }

        if (path == null) {
            console.log("No path selected")
            return "No path selected"
        }

        await writeTextFile(path, data_schema)
        SetIsDataDirty(false)
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
