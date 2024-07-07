import TextComponent from "@/components/editor_components/inputs/Text/TextComponent.tsx"
import { CheckboxComponent } from "@/components/editor_components/inputs/Checkbox/CheckboxComponent.tsx"
import NumberComponent from "@/components/editor_components/inputs/Number/NumberComponent.tsx"
import DecimalComponent from "@/components/editor_components/inputs/Decimal/DecimalComponent.tsx"
import DateComponent from "@/components/editor_components/inputs/Date/DateComponent.tsx"
import DropdownComponent from "@/components/editor_components/inputs/Dropdown/DropdownComponent.tsx"
import { EmailComponent } from "@/components/editor_components/inputs/Email/EmailComponent.tsx"
import RadioComponent from "@/components/editor_components/inputs/Radio/RadioComponent.tsx"
import { PostalCodeComponent } from "@/components/editor_components/inputs/PostalCode/PostalCodeComponent.tsx"
import { PhoneNumberComponent } from "@/components/editor_components/inputs/PhoneNumber/PhoneNumberComponent.tsx"
import { MarkdownComponent } from "@/components/editor_components/displays/Markdown/MarkdownComponent.tsx"
import { TimeComponent } from "@/components/editor_components/inputs/Time/TimeComponent.tsx"
import { createId } from "@paralleldrive/cuid2"
import { RepeaterComponent } from "@/components/editor_components/containers/Repeater/RepeaterComponent.tsx"
import { FormComponent } from "@/components/editor_components/containers/Form/FormComponent.tsx"
import { BulletComponent } from "@/components/editor_components/displays/Bullet/BulletComponent.tsx"
import { LabelComponent } from "@/components/editor_components/displays/Label/LabelComponent.tsx"
import { ImageComponent } from "@/components/editor_components/displays/Image/ImageComponent.tsx"
import { VideoComponent } from "@/components/editor_components/displays/Video/VideoComponent.tsx"
import { FileUploadComponent } from "@/components/editor_components/inputs/FileUpload/FileUploadComponent.tsx"
import { ParagraphComponent } from "@/components/editor_components/displays/Paragraph/ParagraphComponent.tsx"
import { LinkComponent } from "@/components/editor_components/displays/Link/LinkComponent.tsx"
import { ButtonComponent } from "@/components/editor_components/control/Button/ButtonComponent.tsx"
import { HorizontalComponent } from "@/components/editor_components/containers/Horizontal/HorizontalComponent.tsx"
import { VerticalComponent } from "@/components/editor_components/containers/Vertical/VerticalComponents.tsx"
import { GroupComponent } from "@/components/editor_components/containers/Group/GroupComponent.tsx"
import { HeadingComponent } from "@/components/editor_components/displays/Heading/HeadingComponent.tsx"

export function GetComponentForSchemaName(data: string) {
    switch (data) {
        case "form":
            return <FormComponent id={createId()} />
        case "horizontal":
            return <HorizontalComponent id={createId()} />
        case "vertical":
            return <VerticalComponent id={createId()} />
        case "repeater":
            return <RepeaterComponent id={createId()} />
        case "group":
            return <GroupComponent id={createId()} />
        case "checkbox":
            return <CheckboxComponent id={createId()} />
        case "text":
            return <TextComponent id={createId()} />
        case "number":
            return <NumberComponent id={createId()} />
        case "decimal":
            return <DecimalComponent id={createId()} />
        case "date":
            return <DateComponent id={createId()} />
        case "dropdown":
            return <DropdownComponent id={createId()} />
        case "email":
            return <EmailComponent id={createId()} />
        case "markdown":
            return <MarkdownComponent id={createId()} />
        case "radio":
            return <RadioComponent id={createId()} />
        case "postal_code":
            return <PostalCodeComponent id={createId()} />
        case "phone":
            return <PhoneNumberComponent id={createId()} />
        case "time":
            return <TimeComponent id={createId()} />
        case "bullet":
            return <BulletComponent id={createId()} />
        case "label":
            return <LabelComponent id={createId()} />
        case "image":
            return <ImageComponent id={createId()} />
        case "video":
            return <VideoComponent id={createId()} />
        case "file_upload":
            return <FileUploadComponent id={createId()} />
        case "paragraph":
            return <ParagraphComponent id={createId()} />
        case "button":
            return <ButtonComponent id={createId()} />
        case "link":
            return <LinkComponent id={createId()} />
        case "heading":
            return <HeadingComponent id={createId()} />
        default:
            console.log(`Unknown component ${data}`)
    }
}
