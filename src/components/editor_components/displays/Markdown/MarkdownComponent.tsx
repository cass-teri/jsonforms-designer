import DOMPurify from "dompurify"
import { DisplayComponent } from "@/components/editor_components/displays/DisplayComponent.ts"
import { ReactNode } from "react"

export class MarkdownComponent extends DisplayComponent {
    markdown: string = ""

    SetMarkdown(markdown: string): void {
        this.markdown = markdown
    }

    Markdown(): string {
        return this.markdown
    }

    render(): ReactNode {
        return <p className="flex flex-row" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.markdown) }}></p>
    }
}
