export interface ILinkProps {
    href: string
    label: string
}

interface ILinkComponentProps {
    properties?: ILinkProps
    id?: string
}

export function LinkComponent(props: ILinkComponentProps) {
    const properties = props.properties
    return (
        <a href={properties?.href} className="text-blue-500">
            {properties?.label}
        </a>
    )
}
