import { InputComponent } from "@/components/editor_components/inputs/InputComponent.ts"

export class EmailComponent extends InputComponent {
    id: string = ""
    value: string = ""
    default_value: string = ""

    render() {
        return <input id={this.id} type="email" value={this.value} defaultValue={this.default_value} />
    }
}
