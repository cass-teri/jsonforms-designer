import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { TbPhone } from "react-icons/tb"

export const PhoneNumberButton: IComponentButton = {
    name: "Phone Number Input",
    icon: <TbPhone className="w-12 h-12" />,
    schema: "phone_number",
    container: false,
    category: "inputs"
}
