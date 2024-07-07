export interface IParagraphProps {
    text: string
}

import { IPageComponentProps } from "@/components/editor_components/containers/Page/PageComponent.tsx"

export function ParagraphComponent(props: IPageComponentProps) {
    const properties = props.properties as IParagraphProps
    let text = ""
    if (properties) {
        if (properties.text) {
            text = properties.text
        }
    }

    return <p className="text-lg">{text}</p>
}
