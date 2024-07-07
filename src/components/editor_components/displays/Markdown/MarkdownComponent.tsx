import { marked } from "marked"
import DOMPurify from "dompurify"

interface IMarkdownProps {
    markdown?: string
    id?: string
}

export function MarkdownComponent(props: IMarkdownProps) {
    if (!props.markdown) {
        return <div>No Markdown Detected</div>
    }
    const markdown = marked(props.markdown, { async: false })

    let md = ""

    if (typeof markdown == "string") {
        md = markdown
    } else {
        markdown.then((result) => {
            md = result
        })
    }

    return <p className="flex flex-row" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md) }}></p>
}
