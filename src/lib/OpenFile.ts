export interface IOpenFileProps {
    SetBuffer: (buffer: string) => void
    SetSchema: (schema: string) => void
    SetIsDirty: (is_dirty: boolean) => void
}

export function OpenFile(props: IOpenFileProps) {
    if (typeof window.FileReader !== "function") {
        alert("The file API isn't supported on this browser yet.")
        return
    }

    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.onchange = function (e: any) {
        if (e.target === null) {
            return
        }

        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = function (e) {
            if (e.target === null) {
                return
            }
            const contents = e.target.result
            if (typeof contents !== "string") {
                return
            }
            props.SetBuffer(contents)
            props.SetSchema(contents)
            props.SetIsDirty(true)
        }
        reader.readAsText(file)
    }
    input.click()
}
