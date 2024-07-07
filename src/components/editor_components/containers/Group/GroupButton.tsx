import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaRegObjectGroup } from "react-icons/fa6"

export const GroupButton: IComponentButton = {
    name: "Section Layout",
    icon: <FaRegObjectGroup className="w-12 h-12" />,
    schema: "section",
    container: true,
    category: "layout"
}
