import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar.tsx"
import { useRef } from "react"
import { useSchema } from "@/components/contexts/SchemaContextProvider.tsx"
import { OpenFile } from "@/lib/OpenFile.ts"

export function MainMenu() {
    const ref = useRef<HTMLInputElement>(null)
    const { SetUiSchema, ui_buffer, data_buffer, SetIsDirty, SetUiBuffer, SetDataBuffer, SetDataSchema } = useSchema()

    function FileChange() {
        if (ref.current !== null) {
            if (ref.current.files === null) {
                //User Cancelled
                return
            }
            if (ref.current.files.length > 1) {
                throw new Error("Only one file can be uploaded at a time")
            }

            const filename = ref.current?.files[0]
            const reader = new FileReader()
            reader.onload = function (e) {
                if (e.target === null) {
                    return
                }
                const contents = e.target.result
                if (typeof contents !== "string") {
                    return
                }
                SetUiBuffer(contents)
                SetUiSchema(contents)
                SetIsDirty(true)
            }
            reader.readAsText(filename as Blob)

            console.log(filename)
        }
    }

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

    function OnCut() {}

    function OnCopy() {}

    function OnPaste() {}

    function OnDelete() {}

    function OnShowFind() {}

    function OnShowReplace() {}

    function OnSettings() {}

    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={NewDataFile}>New Data Schema</MenubarItem>
                        <MenubarItem onClick={NewUiFile}>New UI Schema</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={OpenDataFile}>Open Data Schema</MenubarItem>
                        <MenubarItem onClick={OpenUiFile}>Open UI Schema</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={SaveDataFile}>Save Data Schema</MenubarItem>
                        <MenubarItem onClick={SaveUiFile}>Save UI Schema</MenubarItem>
                        <MenubarItem onClick={SaveAllFiles}>Save All Schema</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={DownloadDataSchema}>Download Data Schema</MenubarItem>
                        <MenubarItem onClick={DownloadUiSchema}>Download UI Schema</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={OnCut}>Cut</MenubarItem>
                        <MenubarItem onClick={OnCopy}>Copy</MenubarItem>
                        <MenubarItem onClick={OnPaste}>Paste</MenubarItem>
                        <MenubarItem onClick={OnDelete}>Delete</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={OnShowFind}>Find</MenubarItem>
                        <MenubarItem onClick={OnShowReplace}>Replace</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={OnSettings}>Settings</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <input className="hidden" type="file" ref={ref} onChange={FileChange} />
        </>
    )
}
