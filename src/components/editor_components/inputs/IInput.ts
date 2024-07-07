import { IRadioProperties } from "@/components/editor_components/inputs/IRadioProperties.ts"
import { IInputProperties } from "@/components/editor_components/inputs/IInputProperties.ts"

/*
    Dropdown
*/
interface IDropdownProperties extends IInputProperties {
    options?: IDropdownOption[]
    label?: string
    url?: string
    default_value?: IDropdownOption
    id_default_value_selectable?: boolean
}

interface IDropdownOption {
    value: string
    label: string
}

export interface IDropdownProps {
    properties: IDropdownProperties
}

/*

    Radio

*/
export interface IRadio {
    properties: IRadioProperties
}

export interface IRadioOption {
    value: string
    label: string
}

/*
    Date
*/

export interface IDate {
    properties: IDateProperties
}

export interface IDateProperties extends IInputProperties {
    label?: string
    value?: Date
}

/*
    Time
*/
export interface ITime {
    properties: ITimeProperties
}

export interface ITimeProperties extends IInputProperties {
    label?: string
    value?: Date
}

/*
    Email
*/

export interface IEmail {
    properties: IEmailProperties
}

export interface IEmailProperties extends IInputProperties {
    label?: string
    value?: string
}
