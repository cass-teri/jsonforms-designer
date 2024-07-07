import { FaVideo } from "react-icons/fa6"

interface IDisplayProps {}

interface VideoComponentProps extends IDisplayProps {
    id?: string
}

export function VideoComponent(props: VideoComponentProps) {
    console.log(props)
    return <FaVideo className="w-12 h-12" />
}
