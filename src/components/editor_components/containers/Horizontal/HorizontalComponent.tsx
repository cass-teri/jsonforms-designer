import { IContainer } from "@/components/editor_components/containers/IContainer.ts"

interface IHorizontalProperties {}

interface IHorizontalComponentProps extends IContainer {
    properties?: IHorizontalProperties
}

export function HorizontalComponent(props: IHorizontalComponentProps) {
    return <div id={props.id}>{props.children}</div>
}
