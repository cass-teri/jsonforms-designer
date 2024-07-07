import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { IoDocumentOutline } from "react-icons/io5"

export const PageButton: IComponentButton = {
    name: "Page Layout",
    icon: <IoDocumentOutline className="w-12 h-12" />,
    schema: "page",
    container: true,
    category: "layout"
}
