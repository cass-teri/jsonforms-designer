import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

export interface ITimeInputProps extends IEditorComponent {
    properties?: object
}

export function TimeComponent(props: ITimeInputProps) {
    console.log(props.properties)

    return <input type="time" />
}
