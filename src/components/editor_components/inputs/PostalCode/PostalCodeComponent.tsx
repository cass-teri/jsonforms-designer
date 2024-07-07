import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface IPostalCodeProps {
    id: string
    label: string
    value: string
}

interface IPostalCodeInputProps extends IEditorComponent {
    properties?: IPostalCodeProps
}

export function PostalCodeComponent(props: IPostalCodeInputProps) {
    console.log(props.properties)

    return <input type="text" />
}
