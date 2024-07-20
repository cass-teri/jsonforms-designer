import { ThemeToggle } from "@/components/framework/skeleton/header/ThemeToggle"
import { ToggleButton } from "@/components/framework/ToggleButton.tsx"
import { VscOpenPreview, VscSaveAll } from "react-icons/vsc"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { AiOutlineFileZip } from "react-icons/ai"
import { LuFileJson } from "react-icons/lu"
import { useStatusMessage } from "@/components/contexts/StatusMessageProvider.tsx"

interface IHeaderProps {
    toggleView: (view: string) => void
    show_canvas: boolean
    show_ui_schema: boolean
    show_data_schema: boolean
    show_preview: boolean
}

export function Header(props: IHeaderProps) {
    const { SetUiSchema, ui_buffer, data_buffer, SetIsUiDirty, SetIsDataDirty, SetDataSchema } = useSchema()
    const { SetStatusMessage } = useStatusMessage()
    function SaveAllFiles() {
        try {
            const data_success = SaveDataFile()
            const ui_success = SaveUiFile()
            if (data_success && ui_success) {
                SetStatusMessage({ message: "Files saved successfully", type: "success" })
            }
        } catch (e: any) {
            console.log(e.message)
            SetStatusMessage({ message: e.message, type: "error" })
        }
    }

    function SaveDataFile() {
        try {
            const buffer_parsed = JSON.parse(data_buffer)
            const schema_string = JSON.stringify(buffer_parsed, null, 4)
            SetDataSchema(schema_string)
            SetIsDataDirty(false)
            return true
        } catch (e: any) {
            console.error(e.message)
            SetStatusMessage({ message: `DataSchema: ${e.message}`, type: "error" })
            return false
        }
    }

    function SaveUiFile() {
        try {
            const buffer_parsed = JSON.parse(ui_buffer)
            const schema_string = JSON.stringify(buffer_parsed, null, 4)
            SetUiSchema(schema_string)
            SetIsUiDirty(false)
            return true
        } catch (e: any) {
            console.error(e.message)
            SetStatusMessage({ message: `UISchema: ${e.message}`, type: "error" })
            return false
        }
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
