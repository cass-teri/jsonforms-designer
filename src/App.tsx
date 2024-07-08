import { ComponentPanel } from "@/components/framework/ComponentPanel"
import { PropertiesPanel } from "@/components/framework/PropertiesPanel"
import FormCanvas from "@/components/framework/FormCanvas"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { UiSchemaEditor } from "@/components/framework/UiSchemaEditor"
import { DataSchemaEditor } from "@/components/framework/DataSchemaEditor"
import { Footer } from "@/components/framework/skeleton/footer/Footer"
import { Header } from "@/components/framework/skeleton/header/Header"
import { useState } from "react"
import { PreviewPanel } from "@/components/framework/PreviewPanel"

function App() {
    const [show_canvas, SetShowCanvas] = useState(false)
    const [show_ui_schema, SetShowSchemaUi] = useState(true)
    const [show_data_schema, SetShowSchemaData] = useState(true)
    const [show_preview, SetShowPreview] = useState(false)

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
                <ComponentPanel></ComponentPanel>
                <PanelGroup direction="horizontal" className="bg-white">
                    <Panel defaultSize={25} hidden={!show_canvas}>
                        <FormCanvas></FormCanvas>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${ show_canvas ? "" : "hidden"}`} />
                    <Panel defaultSize={25} hidden={!show_data_schema}>
                        <DataSchemaEditor></DataSchemaEditor>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${ show_data_schema?"":"hidden"}`} />
                    <Panel defaultSize={25} hidden={!show_ui_schema}>
                        <UiSchemaEditor></UiSchemaEditor>
                    </Panel>
                    <PanelResizeHandle className={`border-2 border-border ${ show_ui_schema?"":"hidden"}`} />
                    <Panel defaultSize={25} hidden={!show_preview}>
                        <PreviewPanel></PreviewPanel>
                    </Panel>
                </PanelGroup>
                <PropertiesPanel></PropertiesPanel>
            </main>
            <Footer />
        </>
    )
}

export default App
