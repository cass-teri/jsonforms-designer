import { SaveUiFile } from "./SaveUiFile.ts"
import { SaveDataFile } from "./SaveDataFile.ts"

export async function SaveAll(
    ui_schema: string,
    ui_schema_path: string,
    SetIsUiDirty: (is_dirty: boolean) => void,
    data_schema: string,
    data_schema_path: string,
    SetIsDataDirty: (is_dirty: boolean) => void
) {
    try {
        const data_success = await SaveDataFile(data_schema, data_schema_path, SetIsDataDirty)
        const ui_success = await SaveUiFile(ui_schema, ui_schema_path, SetIsUiDirty)

        console.log("data_success", data_success)
        console.log("ui_success", ui_success)

        if (data_success && ui_success) {
            console.log("Files saved successfully")
            SetIsDataDirty(false)
            SetIsUiDirty(false)
        }
    } catch (e: any) {
        console.error(e.message)
        return e.message
    }
}
