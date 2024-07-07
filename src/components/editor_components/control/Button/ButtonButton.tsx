import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { CgPlayButtonR } from "react-icons/cg"

export const ButtonButton: IComponentButton = {
    name: "Button",
    icon: <CgPlayButtonR className="w-12 h-12" />,
    schema: "button",
    container: false,
    category: "controls"
}
