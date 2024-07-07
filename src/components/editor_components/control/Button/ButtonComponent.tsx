interface IButtonComponentProps {
    properties?: IButtonProperties
    id?: string
}

interface IButtonProperties {
    label?: string
    action?: () => void
}

const defaultProps = {
    label: "Button",
    action: () => {}
}

export function ButtonComponent(props: IButtonComponentProps) {
    const properties = props.properties ?? (defaultProps as IButtonProperties)

    return (
        <button onClick={properties.action} className="bg-blue-500 text-white p-2 rounded">
            {properties.label}
        </button>
    )
}
