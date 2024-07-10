import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class PostalCodeComponent extends InputComponent {
    label: string | null = null

    render() {
        return (
            <>
                <label>{this.label ?? "Postal Code"}</label>
                <input type="text" placeholder={this.placeholder ?? undefined} />
            </>
        )
    }
}
