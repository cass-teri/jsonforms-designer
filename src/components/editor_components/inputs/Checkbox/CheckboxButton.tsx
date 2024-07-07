import { TbCheckbox } from "react-icons/tb"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const CheckboxButton: IComponentButton = {
    name: "Checkbox",
    icon: <TbCheckbox className="w-12 h-12" />,
    schema: "checkbox",
    container: false,
    category: "inputs"
}
