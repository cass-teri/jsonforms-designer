import { MdAlternateEmail } from "react-icons/md"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const EmailButton: IComponentButton = {
    name: "Email Input",
    icon: <MdAlternateEmail className="w-12 h-12" />,
    schema: "email",
    container: false,
    category: "inputs"
}
