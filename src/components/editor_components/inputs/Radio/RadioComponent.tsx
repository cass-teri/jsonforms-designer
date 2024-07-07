import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

export interface IRadioInputProps extends IEditorComponent {
    properties?: object
}

export default function RadioComponent(props: IRadioInputProps) {
    console.log(props.properties)

    return <input type="radio" />
}
