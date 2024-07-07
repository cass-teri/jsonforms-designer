import { IProperties } from "@/components/editor_components/IProperties.ts"

export interface ILabelProperties extends IProperties {
    label?: string
}

interface ILabelComponentProps {
    properties?: ILabelProperties
    id?: string
}

export function LabelComponent(props: ILabelComponentProps) {
    const properties = props.properties
    let label = ""
    if (properties) {
        if (properties.label) {
            label = properties.label
        }
    }

    return <label className="text-lg">{label}</label>
}
