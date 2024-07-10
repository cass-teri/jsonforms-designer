import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class DropdownComponent extends InputComponent {
    label: string = ""
    default_value: string = ""

    SetLabel(label: string): void {
        this.label = label
    }

    Label(): string {
        return this.label
    }

    DefaultValue(): string {
        return this.default_value
    }

    SetDefaultValue(default_value: string): void {
        this.default_value = default_value
    }

    render() {
        return (
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        )
    }
}
