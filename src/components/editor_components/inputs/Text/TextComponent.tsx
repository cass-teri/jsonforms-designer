import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface ITextProperties {
    multiline: boolean
    width: number
}

interface ITextInputProps extends IEditorComponent {
    properties?: ITextProperties
}

export default function TextComponent(props: ITextInputProps) {
    let is_multiline = false
    if (props.properties !== null && props.properties?.multiline !== null) {
        is_multiline = props.properties?.["multiline"] ?? false
    }

    return is_multiline ? <textarea></textarea> : <input type="text" />
}
