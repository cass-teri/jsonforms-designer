import { TbDecimal } from "react-icons/tb"
import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"

export const DecimalButton: IComponentButton = {
    name: "Decimal Input",
    icon: <TbDecimal className="w-12 h-12" />,
    schema: "decimal",
    container: false,
    category: "inputs"
}
