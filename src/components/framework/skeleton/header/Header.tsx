import { ThemeToggle } from "@/components/framework/skeleton/header/ThemeToggle"
import { ToggleButton } from "@/components/framework/ToggleButton.tsx"
import { VscOpenPreview, VscSaveAll } from "react-icons/vsc"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { AiOutlineFileZip } from "react-icons/ai"
import { LuFileJson } from "react-icons/lu"
import { useStatusMessage } from "@/components/contexts/StatusMessageProvider.tsx"
import {save} from "@tauri-apps/api/dialog";
import {writeTextFile} from "@tauri-apps/api/fs";

interface IHeaderProps {
    toggleView: (view: string) => void
    show_canvas: boolean
    show_ui_schema: boolean
    show_data_schema: boolean
    show_preview: boolean
}

export function Header(props: IHeaderProps) {
    const { SetUiSchema, ui_buffer, data_buffer, SetIsUiDirty, SetIsDataDirty, SetDataSchema, data_schema_path, ui_schema_path , SetDataSchemaPath, SetUiSchemaPath} = useSchema()
    const { SetStatusMessage } = useStatusMessage()

    async function SaveAllFiles() {

        // Save Data Schema
        try {
            let path: string | null = data_schema_path
            if (path == "") {
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

            const is_model_valid = SetDataSchema(data_buffer)

            if(is_model_valid) {
                await writeTextFile(path, data_buffer)
                SetIsDataDirty(false)
                SetDataSchemaPath(path)
            }
            else {
                return "Data Schema is invalid"
            }
        } catch (e: any) {
            SetStatusMessage({ message: e.message, type: "error" })
            return e.message
        }

        // Save UI Schema
        try {
            let path: string | null = ui_schema_path
            if (path == "") {
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

            const is_ui_valid = SetUiSchema(ui_buffer)
            if (is_ui_valid) {
                await writeTextFile(path, ui_buffer)
                SetIsUiDirty(false)
                SetUiSchemaPath(path)
            }
            else {
                return "UI Schema is invalid"
            }
        } catch (e: any) {
            console.error(e)
            SetStatusMessage({ message: e.message, type: "error" })
            return e.message
        }

        SetStatusMessage({ message: "Files saved successfully", type: "success" })

    }

    return (
        <div className="fixed flex flex-row bg-accent text-accent-foreground left-0 top-0 right-0 h-14 items-center justify-between shadow">
            <div className="flex flex-row items-center justify-center pl-4">
                <div className="flex flex-row">
                    <button
                        onClick={SaveAllFiles}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Save All Files"
                    >
                        <VscSaveAll className="w-8 h-8" />
                    </button>
                </div>
            </div>
            <div className="text-2xl flex flex-row gap-6">
                <div className="flex flex-row gap-6">
                    <ToggleButton
                        is_active={props.show_data_schema}
                        icon={<AiOutlineFileZip />}
                        view="data_schema"
                        toggleView={props.toggleView}
                    >
                        Data Schema
                    </ToggleButton>
                    <ToggleButton
                        is_active={props.show_ui_schema}
                        icon={<LuFileJson />}
                        view="ui_schema"
                        toggleView={props.toggleView}
                    >
                        UI Schema
                    </ToggleButton>
                    <ToggleButton
                        is_active={props.show_preview}
                        icon={<VscOpenPreview />}
                        view="preview"
                        toggleView={props.toggleView}
                    >
                        Preview
                    </ToggleButton>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                <ThemeToggle className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded pr-4" />
            </div>
        </div>
    )
}
