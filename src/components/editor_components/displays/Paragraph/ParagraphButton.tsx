import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { BsTextParagraph } from "react-icons/bs"

export const ParagraphButton: IComponentButton = {
    name: "Paragraph",
    icon: <BsTextParagraph className="w-12 h-12" />,
    schema: "paragraph",
    container: false,
    category: "displays"
}
