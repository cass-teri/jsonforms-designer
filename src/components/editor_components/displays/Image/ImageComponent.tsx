import { ReactNode } from "react"
import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"

export class ImageComponent extends DisplayComponent {
    src: string = ""
    alt: string = ""

    SetSrc(src: string): void {
        this.src = src
    }

    Src(): string {
        return this.src
    }

    SetAlt(alt: string): void {
        this.alt = alt
    }

    Alt(): string {
        return this.alt
    }

    render(): ReactNode {
        return <img src={this.src} alt={this.alt} />
    }
}
