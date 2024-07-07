import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface IFileUploadProperties {}

interface IFileUploadProps extends IEditorComponent {
    properties?: IFileUploadProperties
}

export function FileUploadComponent(props: IFileUploadProps) {
    console.log(props.properties)

    return <input type="file" />
}
