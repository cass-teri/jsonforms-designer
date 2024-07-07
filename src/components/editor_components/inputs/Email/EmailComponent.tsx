type IEmailProperties = {
    id: string
    value: string
}

interface IEmailInputProps {
    properties?: IEmailProperties
    id?: string
}

export function EmailComponent(props: IEmailInputProps) {
    const properties = props.properties

    return <input id={properties?.id} type="email" value={properties?.value} />
}
