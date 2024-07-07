import { FormEvent } from "react"
import { IContainer } from "@/components/editor_components/containers/IContainer.ts"

export interface IFormProps extends IContainer {}

export function FormComponent(props: IFormProps) {
    function Submit(event: FormEvent) {
        event.preventDefault()
    }

    return <form onSubmit={Submit}>{props.children}</form>
}
