import { MdLabelImportantOutline } from "react-icons/md"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const LabelButton: IComponentButton = {
    name: "Label",
    icon: <MdLabelImportantOutline className="w-12 h-12" />,
    schema: "label",
    container: false,
    category: "displays"
}
