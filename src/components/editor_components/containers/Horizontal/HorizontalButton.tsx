import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { RxViewHorizontal } from "react-icons/rx"

export const HorizontalButton: IComponentButton = {
    name: "Horizontal Layout",
    icon: <RxViewHorizontal className="w-12 h-12" />,
    schema: "horizontal",
    container: true,
    category: "layout"
}
