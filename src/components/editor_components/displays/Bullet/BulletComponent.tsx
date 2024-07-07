import { IEditorComponent } from "@/components/editor_components/IEditorComponent.ts"

interface IBulletProperties extends IEditorComponent {
    items?: string[]
    list_type?: "number" | "circle" | "disc" | "square"
}

interface IBulletComponentProps {
    properties?: IBulletProperties
    id?: string
}

export function BulletComponent(props: IBulletComponentProps) {
    const bullets = props.properties as IBulletProperties

    return (
        <ul>
            {bullets.items?.map((item: string) => {
                return <li>{item}</li>
            })}
        </ul>
    )
}
