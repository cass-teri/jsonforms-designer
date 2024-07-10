import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class IntegerComponent extends InputComponent {
    id: string = ""
    label: string = ""
    value: number = 0

    render() {
        return (
            <div id={this.id}>
                <label>{this.label}</label>
                <input type="number" />
            </div>
        )
    }
}
