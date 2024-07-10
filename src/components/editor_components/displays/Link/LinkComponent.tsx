import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"

export class LinkComponent extends DisplayComponent {
    label: string = ""
    href: string = ""

    render() {
        return (
            <a href={this.href} className="text-blue-500">
                {this.label}
            </a>
        )
    }
}
