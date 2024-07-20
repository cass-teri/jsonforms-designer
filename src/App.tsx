import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { UiSchemaEditor } from "@/components/framework/UiSchemaEditor"
import { DataSchemaEditor } from "@/components/framework/DataSchemaEditor"
import { Footer } from "@/components/framework/skeleton/footer/Footer"
import { Header } from "@/components/framework/skeleton/header/Header"
import { useEffect, useState } from "react"
import { PreviewPanel } from "@/components/framework/PreviewPanel"
import { appWindow } from "@tauri-apps/api/window"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { SaveDataFile } from "@/lib/MenuActions/SaveDataFile.ts"
import { OpenProject } from "@/lib/MenuActions/OpenProject.ts"
import { NewProject } from "@/lib/MenuActions/NewProject.ts"
import { SaveUiFile } from "@/lib/MenuActions/SaveUiFile.ts"
import { SaveAll } from "@/lib/MenuActions/SaveAll.ts"
import { OpenUiFile } from "@/lib/MenuActions/OpenUiFile.ts"
import { OpenDataFile } from "@/lib/MenuActions/OpenDataFile.ts"
import { NewDataSchema } from "@/lib/MenuActions/NewDataSchema.ts"
import { NewUiSchema } from "@/lib/MenuActions/NewUiSchema.ts"

function App() {
    const [show_canvas, SetShowCanvas] = useState(false)
    const [show_ui_schema, SetShowSchemaUi] = useState(true)
    const [show_data_schema, SetShowSchemaData] = useState(true)
    const [show_preview, SetShowPreview] = useState(true)

    useAppWindowListeners()

    function ToggleView(view: string) {
        if (view === "canvas") {
            SetShowCanvas(!show_canvas)
        } else if (view === "ui_schema") {
            SetShowSchemaUi(!show_ui_schema)
        } else if (view === "data_schema") {
            SetShowSchemaData(!show_data_schema)
        } else if (view === "preview") {
            SetShowPreview(!show_preview)
        }
    }

    return (
        <>
            <Header
                toggleView={ToggleView}
                show_canvas={show_canvas}
                show_preview={show_preview}
                show_ui_schema={show_ui_schema}
                show_data_schema={show_data_schema}
            />
            <main className="pt-14 h-[calc(100vh-2rem)] ">
                {/*                <ComponentPanel></ComponentPanel>*/}
                <PanelGroup direction="horizontal" className="bg-white">
                    {/*
                    <Panel defaultSize={25} hidden={!show_canvas}>
                        <FormCanvas></FormCanvas>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${ show_canvas ? "" : "hidden"}`} />
*/}
                    <Panel defaultSize={33} hidden={!show_data_schema}>
                        <DataSchemaEditor></DataSchemaEditor>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${show_data_schema ? "" : "hidden"}`} />
                    <Panel defaultSize={33} hidden={!show_ui_schema}>
                        <UiSchemaEditor></UiSchemaEditor>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${show_ui_schema ? "" : "hidden"}`} />
                    <Panel defaultSize={34} hidden={!show_preview}>
                        <PreviewPanel></PreviewPanel>
                    </Panel>
                </PanelGroup>
                {/*                <PropertiesPanel></PropertiesPanel>*/}
            </main>
            <Footer />
        </>
    )
}

export default App

export function useAppWindowListeners() {
    const {
        data_schema_path,
        data_buffer,
        ui_schema_path,
        ui_buffer,
        SetDataBuffer,
        SetUiBuffer,
        SetProjectName,
        SetProjectPath,
        SetDataSchemaPath,
        SetUiSchemaPath,
        SetIsDataDirty,
        SetIsUiDirty
    } = useSchema()

    useEffect(() => {
        const new_project = appWindow.listen("new_project", async () => {
            await NewProject()
            console.log("new_project")
        })

        const open_project = appWindow.listen("open_project", async () => {
            console.log("open_project")
            await OpenProject(
                SetDataBuffer,
                SetUiBuffer,
                SetIsDataDirty,
                SetIsUiDirty,
                SetProjectName,
                SetProjectPath,
                SetDataSchemaPath,
                SetUiSchemaPath
            )
        })

        const save_project = appWindow.listen("save_project", async () => {
            await SaveAll(ui_buffer, ui_schema_path, SetIsUiDirty, data_buffer, data_schema_path, SetIsDataDirty)
        })

        const new_data_schema = appWindow.listen("new_data_schema", async () => {
            await NewDataSchema()
        })

        const new_ui_schema = appWindow.listen("new_ui_schema", async () => {
            await NewUiSchema()
        })

        const open_data_schema = appWindow.listen("open_data_schema", async () => {
            await OpenDataFile(data_schema_path, SetDataBuffer, SetIsDataDirty)
        })

        const open_ui_schema = appWindow.listen("open_ui_schema", async () => {
            await OpenUiFile(ui_schema_path, SetUiBuffer, SetIsUiDirty)
        })

        const save_data_schema = appWindow.listen("save_data_schema", async () => {
            await SaveDataFile(data_buffer, data_schema_path, SetIsDataDirty)
        })

        const save_ui_schema = appWindow.listen("save_ui_schema", async () => {
            await SaveUiFile(ui_buffer, ui_schema_path, SetIsUiDirty)
        })

        const save_all = appWindow.listen("save_all", async () => {
            await SaveAll(ui_buffer, ui_schema_path, SetIsUiDirty, data_buffer, data_schema_path, SetIsDataDirty)
        })

        return () => {
            new_project.then((f) => f())
            save_project.then((f) => f())
            open_project.then((f) => f())
            new_data_schema.then((f) => f())
            new_ui_schema.then((f) => f())
            open_data_schema.then((f) => f())
            open_ui_schema.then((f) => f())
            save_data_schema.then((f) => f())
            save_ui_schema.then((f) => f())
            save_all.then((f) => f())
        }
    }, [])
}
