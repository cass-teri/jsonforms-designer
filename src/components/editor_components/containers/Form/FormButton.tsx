import { RxViewGrid } from "react-icons/rx"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const FormButton: IComponentButton = {
    name: "Form Layout",
    icon: <RxViewGrid className="w-12 h-12" />,
    schema: "form",
    container: true,
    category: "layout"
}
