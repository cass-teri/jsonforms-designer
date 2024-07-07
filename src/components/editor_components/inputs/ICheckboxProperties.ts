import { IInputProperties } from "@/components/editor_components/inputs/IInputProperties.ts"

export interface ICheckboxProps {
    properties: ICheckboxProperties
}

export interface ICheckboxProperties extends IInputProperties {
    checked?: boolean
    label?: string
}
