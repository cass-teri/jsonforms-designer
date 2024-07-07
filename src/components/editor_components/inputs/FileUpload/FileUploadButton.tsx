import { IComponentButton } from "@/components/editor_components/IComponentButton.ts"
import { BsUpload } from "react-icons/bs"

export const FileUploadButton: IComponentButton = {
    name: "File Upload",
    icon: <BsUpload className="w-12 h-12" />,
    schema: "file_upload",
    container: false,
    category: "inputs"
}
