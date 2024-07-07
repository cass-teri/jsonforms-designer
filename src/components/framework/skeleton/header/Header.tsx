import { ThemeToggle } from "@/components/framework/skeleton/header/ThemeToggle"
import { MainMenu } from "@/components/framework/skeleton/header/MainMenu.tsx"
import { ToggleButton } from "@/components/framework/ToggleButton.tsx"
import { BiSolidPaintRoll } from "react-icons/bi"
import { VscOpenPreview, VscSaveAll } from "react-icons/vsc"
import { VimToggle } from "@/components/framework/skeleton/header/VimToggle.tsx"
import { FaDownload } from "react-icons/fa"
import { FaDownload as Fa6Download } from "react-icons/fa6"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { OpenFile } from "@/lib/OpenFile.ts"
import { MdOutlineFolderZip, MdOutlineSnippetFolder } from "react-icons/md"
import { AiOutlineFileZip } from "react-icons/ai"
import { LuFileJson } from "react-icons/lu"
import { RiSave2Line, RiSave3Line } from "react-icons/ri"

interface IHeaderProps {
    toggleView: (view: string) => void
    show_canvas: boolean
    show_ui_schema: boolean
    show_data_schema: boolean
    show_preview: boolean
}

export function Header(props: IHeaderProps) {
    const { SetUiSchema, ui_buffer, data_buffer, SetIsDirty, SetUiBuffer, SetDataBuffer, SetDataSchema } = useSchema()

    function SaveAllFiles() {
        try {
            SaveDataFile()
            SaveUiFile()
        } catch (e) {
            console.error(e)
        }
    }

    function SaveDataFile() {
        try {
            const buffer_parsed = JSON.parse(data_buffer)
            const schema_string = JSON.stringify(buffer_parsed, null, 4)
            SetDataSchema(schema_string)
            SetIsDirty(false)
        } catch (e) {
            console.error(e)
        }
    }

    function SaveUiFile() {
        try {
            const buffer_parsed = JSON.parse(ui_buffer)
            const schema_string = JSON.stringify(buffer_parsed, null, 4)
            SetUiSchema(schema_string)
            SetIsDirty(false)
        } catch (e) {
            console.error(e)
        }
    }

    function DownloadUiSchema() {
        const element = document.createElement("a")
        const file = new Blob([ui_buffer], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = "schema.json"
        document.body.appendChild(element)
        element.click()
    }

    function DownloadDataSchema() {
        const element = document.createElement("a")
        const file = new Blob([data_buffer], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = "schema.json"
        document.body.appendChild(element)
        element.click()
    }

    function NewDataFile() {
        SetDataSchema("{}")
        SetDataBuffer("{}")
        SetIsDirty(false)
    }

    function NewUiFile() {
        SetUiSchema("{}")
        SetUiBuffer("{}")
        SetIsDirty(false)
    }

    function OpenDataFile() {
        OpenFile({
            SetBuffer: SetDataBuffer,
            SetSchema: SetDataSchema,
            SetIsDirty: SetIsDirty
        })
    }

    function OpenUiFile() {
        OpenFile({
            SetBuffer: SetUiBuffer,
            SetSchema: SetUiSchema,
            SetIsDirty: SetIsDirty
        })
    }

    return (
        <div className="fixed flex flex-row bg-accent text-accent-foreground left-0 top-0 right-0 h-14 items-center justify-between shadow-2xl">
            <div className="flex flex-row items-center justify-center pl-4">
                <MainMenu></MainMenu>
                <div className="flex flex-row pl-4">
                    <button
                        onClick={NewDataFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="New Data File"
                    >
                        <AiOutlineFileZip className="w-8 h-8" />
                    </button>

                    <button
                        onClick={NewUiFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="New UI File"
                    >
                        <LuFileJson className="w-8 h-8" />
                    </button>

                    <button
                        onClick={OpenDataFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Open Data File"
                    >
                        <MdOutlineFolderZip className="w-8 h-8" />
                    </button>
                    <button
                        onClick={OpenUiFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Open UI File"
                    >
                        <MdOutlineSnippetFolder className="w-8 h-8" />
                    </button>

                    <button
                        onClick={SaveDataFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Save Data File"
                    >
                        <RiSave2Line className="w-8 h-8" />
                    </button>

                    <button
                        onClick={SaveUiFile}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Save UI File"
                    >
                        <RiSave3Line className="w-8 h-8" />
                    </button>

                    <button
                        onClick={SaveAllFiles}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                        title="Save All Files"
                    >
                        <VscSaveAll className="w-8 h-8" />
                    </button>

                    <button
                        onClick={DownloadDataSchema}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                    >
                        <FaDownload className="w-8 h-8" />
                    </button>

                    <button
                        onClick={DownloadUiSchema}
                        className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded"
                    >
                        <Fa6Download className="w-8 h-8" />
                    </button>
                </div>
            </div>
            <div className="text-2xl flex flex-row gap-6">
                <div>Form Designer</div>
                <div className="flex flex-row gap-6">
                    <ToggleButton
                        is_active={props.show_canvas}
                        icon={<BiSolidPaintRoll />}
                        view="canvas"
                        toggleView={props.toggleView}
                    >
                        Canvas
                    </ToggleButton>

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
                <VimToggle className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded" />
                <ThemeToggle className="hover:bg-primary hover:text-primary-foreground w-10 h-10 flex flex-col justify-center items-center rounded" />
            </div>
        </div>
    )
}
