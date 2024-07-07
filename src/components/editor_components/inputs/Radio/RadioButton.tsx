import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaRadio } from "react-icons/fa6"

export const RadioButton: IComponentButton = {
    name: "Radio Button",
    icon: <FaRadio className="w-12 h-12" />,
    schema: "radio",
    container: false,
    category: "inputs"
}
