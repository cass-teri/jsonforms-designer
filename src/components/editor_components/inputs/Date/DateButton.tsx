import { MdOutlineDateRange } from "react-icons/md"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const DateButton: IComponentButton = {
    name: "Date Input",
    icon: <MdOutlineDateRange className="w-12 h-12" />,
    schema: "date",
    container: false,
    category: "inputs"
}
