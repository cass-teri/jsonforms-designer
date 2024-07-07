import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface ICheckboxInputProps {
    properties?: object
    id?: string
}

interface ICheckbox extends IEditorComponent {
    label?: string
    value?: boolean
}

export function CheckboxComponent(props: ICheckboxInputProps) {
    const properties = props.properties as ICheckbox

    const label = properties?.label ?? "Checkbox"
    const value = properties?.value ?? false

    return (
        <div className="flex flex-row items-center bg-pink-50">
            <input type="checkbox" className="mr-2" checked={value} />
            <label>{label}</label>
        </div>
    )
}
