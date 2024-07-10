import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"

export class LabelComponent extends DisplayComponent {
    label: string = ""

    SetLabel(label: string): void {
        this.label = label
    }

    render() {
        return <label className="text-lg">{this.label}</label>
    }
}
