import { ContainerComponent } from "@/components/editor_components/containers/ContainerComponent.tsx"

export class HorizontalComponent extends ContainerComponent {
    render() {
        return (
            <div id={this.id}>
                {this.children.map((child) => {
                    return child.render()
                })}
            </div>
        )
    }
}
