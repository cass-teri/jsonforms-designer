import { IRadioOption } from "@/components/editor_components/inputs/IInput.ts"
import { IInputProperties } from "@/components/editor_components/inputs/IInputProperties.ts"

export interface IRadioProperties extends IInputProperties {
    options: IRadioOption[]
    label?: string
}
