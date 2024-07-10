import { TbSquareNumber1 } from "react-icons/tb"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const IntegerButton: IComponentButton = {
    name: "Number Input",
    icon: <TbSquareNumber1 className="w-12 h-12" />,
    schema: "number",
    container: false,
    category: "inputs"
}
