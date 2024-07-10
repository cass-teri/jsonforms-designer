import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"
import { ReactNode } from "react"

export class RadioComponent extends InputComponent {
    render(): ReactNode {
        return <input type="radio" />
    }
}
