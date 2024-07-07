import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

import { IInputProperties } from "@/components/editor_components/inputs/IInputProperties.ts"

export interface INumberProperties extends IInputProperties {
    value?: number
    label?: string
}

export interface INumberComponentProps extends IEditorComponent {
    properties?: INumberProperties
}

export default function NumberComponent(props: INumberComponentProps) {
    const properties = props.properties

    return (
        <div id={props.id}>
            <label>{properties?.label}</label>
            <input type="number" />
        </div>
    )
}
