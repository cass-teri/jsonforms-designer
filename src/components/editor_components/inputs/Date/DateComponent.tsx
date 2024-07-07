interface IDateInputProperties {}

export interface IDateInputProps {
    properties?: IDateInputProperties
    id?: string
}

export default function DateComponent(props: IDateInputProps) {
    console.log(props.properties)

    return <input type="date" />
}
