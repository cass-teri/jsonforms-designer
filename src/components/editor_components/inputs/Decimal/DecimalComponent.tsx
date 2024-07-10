import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class DecimalComponent extends InputComponent {
    label: string = ""
    default_value: number = 0

    render() {
        return (
            <>
                <label>{this.label}</label>
                <input type="number" step="0.01" defaultValue={this.default_value} />
            </>
        )
    }
}
