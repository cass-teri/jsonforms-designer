export interface IDropdownProperties {
    id: string
    value: string
}

export interface DropDownInputProps {
    properties?: object
    id?: string
}

export default function DropdownComponent(props: DropDownInputProps) {
    console.log(props.properties)

    return (
        <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
    )
}
