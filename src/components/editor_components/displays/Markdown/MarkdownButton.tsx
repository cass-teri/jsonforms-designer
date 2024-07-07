import { BsMarkdown } from "react-icons/bs"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const MarkdownButton: IComponentButton = {
    name: "Markdown",
    icon: <BsMarkdown className="w-12 h-12" />,
    schema: "markdown",
    container: false,
    category: "displays"
}
