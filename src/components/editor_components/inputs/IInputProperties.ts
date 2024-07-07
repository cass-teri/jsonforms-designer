import { IProperties } from "@/components/editor_components/IProperties.ts"

export interface IInputProps {
    id: string
    properties?: IInputProperties
}

export interface IInputProperties extends IProperties {
    id: string
}
