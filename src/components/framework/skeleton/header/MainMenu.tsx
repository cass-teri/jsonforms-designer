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

export function MainMenu() {
    const ref = useRef<HTMLInputElement>(null)
    const { ui_schema, SetUiSchema, ui_buffer, SetIsDirty, SetUiBuffer } = useSchema()

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

    function SaveFile() {
        try {
            const buffer_parsed = JSON.parse(ui_buffer)
            const schema_string = JSON.stringify(buffer_parsed, null, 4)
            SetUiSchema(schema_string)
            SetIsDirty(false)
        } catch (e) {
            console.error(e)
        }
    }

    function DownloadFile() {
        const element = document.createElement("a")
        const file = new Blob([ui_schema], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = "schema.json"
        document.body.appendChild(element)
        element.click()
    }

    function NewForm() {
        SetUiBuffer("{}")
        SetUiSchema("{}")
        SetIsDirty(false)
    }

    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={NewForm}>New Form</MenubarItem>
                        <MenubarItem
                            onClick={() => {
                                ref.current?.click()
                            }}
                            onChange={FileChange}
                        >
                            Open File
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={SaveFile}>Save File</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={DownloadFile}>Download File</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <input className="hidden" type="file" ref={ref} onChange={FileChange} />
        </>
    )
}
