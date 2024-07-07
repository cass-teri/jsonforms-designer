import { BsMenuButtonWide } from "react-icons/bs"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const DropdownButton: IComponentButton = {
    name: "Dropdown",
    icon: <BsMenuButtonWide className="w-12 h-12" />,
    schema: "dropdown",
    container: false,
    category: "inputs"
}
