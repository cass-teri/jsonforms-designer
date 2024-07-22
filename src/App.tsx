import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { UiSchemaEditor } from "@/components/framework/UiSchemaEditor"
import { DataSchemaEditor } from "@/components/framework/DataSchemaEditor"
import { Footer } from "@/components/framework/skeleton/footer/Footer"
import { Header } from "@/components/framework/skeleton/header/Header"
import { useEffect, useState } from "react"
import { PreviewPanel } from "@/components/framework/PreviewPanel"
import { appWindow } from "@tauri-apps/api/window"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { OpenProject } from "@/lib/MenuActions/OpenProject.ts"
import { NewProject } from "@/lib/MenuActions/NewProject.ts"
import { OpenUiFile } from "@/lib/MenuActions/OpenUiFile.ts"
import { OpenDataFile } from "@/lib/MenuActions/OpenDataFile.ts"
import { NewDataSchema } from "@/lib/MenuActions/NewDataSchema.ts"
import { NewUiSchema } from "@/lib/MenuActions/NewUiSchema.ts"
import { writeTextFile } from "@tauri-apps/api/fs"
import { save } from "@tauri-apps/api/dialog"

function App() {
    const [show_canvas, SetShowCanvas] = useState(false)
    const [show_ui_schema, SetShowSchemaUi] = useState(true)
    const [show_data_schema, SetShowSchemaData] = useState(true)
    const [show_preview, SetShowPreview] = useState(true)

    const {
        SetDataBuffer,
        SetUiBuffer,
        SetProjectName,
        SetProjectPath,
        SetDataSchemaPath,
        SetUiSchemaPath,
        SetIsDataDirty,
        SetIsUiDirty,
        SetDataSchema,
        SetUiSchema,
        data_schema_path,
        data_buffer,
        ui_schema_path,
        ui_buffer
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
                SetUiSchemaPath,
                SetDataSchema,
                SetUiSchema
            )
        })

        const new_data_schema = appWindow.listen("new_data_schema", async () => {
            await NewDataSchema(SetDataBuffer, SetIsDataDirty, SetDataSchemaPath, SetDataSchema)
        })

        const new_ui_schema = appWindow.listen("new_ui_schema", async () => {
            await NewUiSchema(SetUiBuffer, SetIsUiDirty, SetUiSchemaPath, SetUiSchema)
        })

        const open_data_schema = appWindow.listen("open_data_schema", async () => {
            await OpenDataFile(SetDataBuffer, SetIsDataDirty, SetDataSchemaPath, SetDataSchema)
        })

        const open_ui_schema = appWindow.listen("open_ui_schema", async () => {
            await OpenUiFile(SetUiBuffer, SetIsUiDirty, SetUiSchemaPath, SetUiSchema)
        })

        const save_data_schema = appWindow.listen("save_data_schema", async () => {
            // Save Data Schema
            // This is inline because breaking them out to functions broke the state context
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

                await writeTextFile(path, data_buffer)
                SetIsDataDirty(false)
                if(path != data_schema_path) {
                    SetDataSchemaPath(path)
                }
            } catch (e: any) {
                console.error(e)
                return e.message
            }
        })

        const save_ui_schema = appWindow.listen("save_ui_schema", async () => {
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

                await writeTextFile(path, ui_buffer)
                SetIsUiDirty(false)
                if(path != ui_schema_path) {
                    SetUiSchemaPath(path)
                }
            } catch (e: any) {
                console.error(e)
                return e.message
            }
        })

        const save_all = appWindow.listen("save_all", async () => {
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

                await writeTextFile(path, data_buffer)
                SetIsDataDirty(false)
                SetDataSchema(data_buffer)
            } catch (e: any) {
                console.error(e)
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

                await writeTextFile(path, ui_buffer)
                SetIsUiDirty(false)
                SetUiSchema(ui_buffer)
            } catch (e: any) {
                console.error(e)
                return e.message
            }

        })

        return () => {
            new_project.then((f) => f())
            open_project.then((f) => f())
            new_data_schema.then((f) => f())
            new_ui_schema.then((f) => f())
            open_data_schema.then((f) => f())
            open_ui_schema.then((f) => f())
            save_data_schema.then((f) => f())
            save_ui_schema.then((f) => f())
            save_all.then((f) => f())
        }
    }, [SetDataBuffer, SetDataSchema, SetDataSchemaPath, SetIsDataDirty, SetIsUiDirty, SetProjectName, SetProjectPath, SetUiBuffer, SetUiSchema, SetUiSchemaPath, data_buffer, data_schema_path, ui_buffer, ui_schema_path])

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
                        <div className="h-8 w-full bg-gray-200 px-4 py-1 overflow-hidden text-nowrap border border-neutral-400 dark:bg-neutral-700">{data_schema_path}</div>
                        <DataSchemaEditor></DataSchemaEditor>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${show_data_schema ? "" : "hidden"}`} />
                    <Panel defaultSize={33} hidden={!show_ui_schema}>
                    <div className="h-8 w-full bg-gray-200 px-4 py-1 overflow-hidden text-nowrap border border-neutral-400 dark:bg-neutral-700">{ui_schema_path}</div>
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

export function useAppWindowListeners() {}
