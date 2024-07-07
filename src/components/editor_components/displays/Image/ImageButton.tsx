import { FaRegImage } from "react-icons/fa6"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const ImageButton: IComponentButton = {
    name: "Image",
    icon: <FaRegImage className="w-12 h-12" />,
    schema: "image",
    container: false,
    category: "displays"
}
