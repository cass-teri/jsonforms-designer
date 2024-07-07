import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { RxViewVertical } from "react-icons/rx"

export const VerticalButton: IComponentButton = {
    name: "Vertical Layout",
    icon: <RxViewVertical className="w-12 h-12" />,
    schema: "vertical",
    container: true,
    category: "layout"
}
