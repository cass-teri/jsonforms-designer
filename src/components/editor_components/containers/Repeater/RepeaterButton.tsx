import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaLayerGroup } from "react-icons/fa6"

export const RepeaterButton: IComponentButton = {
    name: "Repeater Layout",
    icon: <FaLayerGroup className="w-12 h-12" />,
    schema: "repeater",
    container: true,
    category: "layout"
}
