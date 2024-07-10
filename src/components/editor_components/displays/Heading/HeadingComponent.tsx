import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"
import { ReactNode } from "react"

export class HeadingComponent extends DisplayComponent {
    label: string = ""

    SetLabel(label: string): void {
        this.label = label
    }

    render(): ReactNode {
        return <h2 id={this.id}>{this.label}</h2>
    }
}
