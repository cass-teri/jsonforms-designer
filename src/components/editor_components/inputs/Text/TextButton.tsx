import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { BsType } from "react-icons/bs"

export const TextButton: IComponentButton = {
    name: "Text Input",
    icon: <BsType className="w-12 h-12" />,
    schema: "text",
    container: false,
    category: "inputs"
}
