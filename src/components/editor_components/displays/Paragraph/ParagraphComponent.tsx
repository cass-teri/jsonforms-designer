import { DisplayComponent } from "../DisplayComponent"

export interface IParagraphProps {
    text: string
}

export class ParagraphComponent extends DisplayComponent {
    text: string = ""

    SetText(text: string): void {
        this.text = text
    }

    Text(): string {
        return this.text
    }

    render() {
        return <p className="text-lg">{this.text}</p>
    }
}
