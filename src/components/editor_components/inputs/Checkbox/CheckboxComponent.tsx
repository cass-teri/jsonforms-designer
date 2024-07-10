import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class CheckboxComponent extends InputComponent {
    label: string = ""
    default_value: boolean = false

    render() {
        return (
            <div className="flex flex-row items-center bg-pink-50">
                <input type="checkbox" className="mr-2" checked={this.default_value} />
                <label>{this.label}</label>
            </div>
        )
    }
}
