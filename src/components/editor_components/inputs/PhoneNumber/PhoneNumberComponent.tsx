import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface IPhoneNumberInputProps extends IEditorComponent {
    properties?: object
}

export function PhoneNumberComponent(props: IPhoneNumberInputProps) {
    console.log(props.properties)

    return <input type="tel" />
}
