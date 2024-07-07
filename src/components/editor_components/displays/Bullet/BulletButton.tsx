import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { FaListUl } from "react-icons/fa6"

export const BulletButton: IComponentButton = {
    name: "Bullet",
    icon: <FaListUl className="w-12 h-12" />,
    schema: "bullet",
    container: false,
    category: "displays"
}
