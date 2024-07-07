import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FiLink } from "react-icons/fi"

export const LinkButton: IComponentButton = {
    name: "Link",
    icon: <FiLink className="w-12 h-12" />,
    schema: "link",
    container: false,
    category: "displays"
}
