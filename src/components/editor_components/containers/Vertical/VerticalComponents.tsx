import { ContainerComponent } from "@/components/editor_components/containers/ContainerComponent.tsx"
import { IContainer } from "@/components/editor_components/containers/IContainer.ts"

export class VerticalComponent extends ContainerComponent {
    constructor(id: string, parent: IContainer | null) {
        super(id, parent)
    }

    render() {
        return (
            <div>
                {this.children.map((child) => {
                    return child.render()
                })}
            </div>
        )
    }
}
