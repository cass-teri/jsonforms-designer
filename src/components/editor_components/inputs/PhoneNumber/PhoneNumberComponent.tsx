import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class PhoneNumberComponent extends InputComponent {
    render() {
        return <input type="tel" />
    }
}
