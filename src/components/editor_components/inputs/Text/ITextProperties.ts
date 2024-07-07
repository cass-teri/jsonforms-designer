import { IInputProperties } from "@/components/editor_components/inputs/IInputProperties.ts"

export interface IText {
    properties: ITextProperties
}

export interface ITextProperties extends IInputProperties {
    text?: string
    width?: number
}
