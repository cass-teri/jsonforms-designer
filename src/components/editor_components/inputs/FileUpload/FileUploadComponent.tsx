import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"
import React from "react"

export class FileUploadComponent extends InputComponent {
    render(): React.ReactNode {
        return <input type="file" />
    }
}
