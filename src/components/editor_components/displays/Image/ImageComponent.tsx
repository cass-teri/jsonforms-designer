interface IImageProperties {
    src: string
    alt: string
}

interface IImageComponentProps {
    properties?: IImageProperties
    id?: string
}

export function ImageComponent(props: IImageComponentProps) {
    const properties = props.properties
    return <img src={properties?.src} alt={properties?.alt} />
}
