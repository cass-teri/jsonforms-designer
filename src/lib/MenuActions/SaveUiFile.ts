import { writeTextFile } from "@tauri-apps/api/fs"
import { save } from "@tauri-apps/api/dialog"

export async function SaveUiFile(ui_schema: string, ui_schema_path: string, SetIsUiDirty: (is_dirty: boolean) => void) {
    console.log("save_ui_schema path", ui_schema_path)
    try {
        let path: string | null = ui_schema_path
        if (ui_schema_path == "") {
            path = await save({
                filters: [
                    {
                        name: "ui_schema",
                        extensions: ["json"]
                    }
                ]
            })
        }

        if (path == null) {
            console.log("No path selected")
            return "No path selected"
        }

        await writeTextFile(path, ui_schema)
        SetIsUiDirty(false)
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
