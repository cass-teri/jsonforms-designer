import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { BsGeoAlt } from "react-icons/bs"

export const PostalCodeButton: IComponentButton = {
    name: "Postal Code Input",
    icon: <BsGeoAlt className="w-12 h-12" />,
    schema: "postal_code",
    container: false,
    category: "inputs"
}
