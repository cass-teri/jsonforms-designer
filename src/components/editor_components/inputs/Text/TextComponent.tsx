import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class TextComponent extends InputComponent {
    is_multiline: boolean = false

    render() {
        return this.is_multiline ? <textarea></textarea> : <input type="text" />
    }
}
