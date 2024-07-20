import { open } from "@tauri-apps/api/dialog"
import { readDir, readTextFile } from "@tauri-apps/api/fs"

export async function OpenProject(
    SetDataBuffer: (data: string) => void,
    SetUiBuffer: (data: string) => void,
    SetIsDataDirty: (is_data_dirty: boolean) => void,
    SetIsUiDirty: (is_ui_dirty: boolean) => void,
    SetProjectName: (name: string) => void,
    SetProjectPath: (path: string) => void,
    SetDataBufferPath: (path: string) => void,
    SetUiBufferPath: (path: string) => void
) {
    try {
        const selected = await open({
            directory: true,
            multiple: false
        })

        if (typeof selected === "string") {
            SetProjectPath(selected)
            const selected_path = selected.split("/")[selected.split("/").length - 1]
            SetProjectName(selected_path)

            readDir(`${selected}`).then((files) => {
                files.forEach((file) => {
                    if (file.name?.endsWith("data_schema.json")) {
                        readTextFile(file.path).then((data) => {
                            SetDataBufferPath(file.path)
                            SetDataBuffer(data)
                            SetIsDataDirty(true)
                        })
                    }
                    if (file.name?.endsWith("ui_schema.json")) {
                        readTextFile(file.path).then((data) => {
                            SetUiBufferPath(file.path)
                            SetUiBuffer(data)
                            SetIsUiDirty(true)
                        })
                    }
                })
            })
        }
    } catch (e: any) {
        console.error(e)
        return e.message
    }
}
