import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaRegClock } from "react-icons/fa6"

export const TimeButton: IComponentButton = {
    name: "Time Input",
    icon: <FaRegClock className="w-12 h-12" />,
    schema: "time",
    container: false,
    category: "inputs"
}
