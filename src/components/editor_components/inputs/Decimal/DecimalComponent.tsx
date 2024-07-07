import { IInputProps } from "@/components/editor_components/inputs/IInputProperties.ts"

export interface IDecimalProperties {
    id: string
    label?: string
    value?: number
}

export interface IDecimalComponentProps extends IInputProps {
    id: string
    properties?: IDecimalProperties
}

export default function DecimalComponent(props: IDecimalComponentProps) {
    console.log(props.properties)

    return <input type="number" step="0.01" />
}
