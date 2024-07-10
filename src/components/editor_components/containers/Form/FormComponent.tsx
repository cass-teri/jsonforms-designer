import { ContainerComponent } from "@/components/editor_components/containers/ContainerComponent.tsx"

export class FormComponent extends ContainerComponent {
    render() {
        return (
            <div className="w-full min-h-32" id={this.id}>
                <div className="w-full h-12 border p-4">:{this.id}:</div>
                {this.children?.map((child) => {
                    return child.render()
                })}
            </div>
        )
    }
}
