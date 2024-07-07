import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaVideo } from "react-icons/fa6"

export const VideoButton: IComponentButton = {
    name: "Video",
    icon: <FaVideo className="w-12 h-12" />,
    schema: "video",
    container: false,
    category: "displays"
}
